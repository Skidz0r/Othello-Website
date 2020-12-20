const file = require('fs'); 
const crypto = require('crypto');
const { join } = require('path');
const headers = require("./headers.js").headers; 

var account = [];

if (file.existsSync("accounts.json")) {
    preencheraccount();
}

function preencheraccount() {
    let data = file.readFileSync("accounts.json");
    if (data.length === 0)
        return;
    let parsedData = JSON.parse(data.toString())["users"];
    for (let i = 0; i < parsedData.length; i++) {
        account.push(parsedData[i]);
    }


}

module.exports.methodPost = function (pathname, request, query, response) {
    switch (pathname) {
        case '/register':
            register(query.nick, query.pass, response);
            break;
        case '/join':
            join(query.group, query.nick, query.pass, response);
            break;
        case '/leave':
            leave(query.game, query.nick, query.pass, response);
            break;
        case '/ranking':
            ranking(response);
            break;
        case '/notify':
            notify(query.game, query.nick, query.pass, query.move, response)
            break;
        default:
            response.writeHead(404, headers.plain);
            response.end();
            break;
    }
}

function register(nick, pass, response) {
    if (nick === null || nick === undefined) {
        response.writeHead(400, headers.plain);
        response.write(JSON.stringify({ error: 'username undefined' }));
        response.end();
        return;
    }
    if (pass === null || pass === undefined) {
        response.writeHead(400, headers.plain);
        response.write(JSON.stringify({ error: 'password undefined' }));
        response.end();
        return;
    }
    if (nick === "" || pass === "") {
        response.writeHead(400, headers.plain);
        response.write(JSON.stringify({ error: 'username and password cant be empty' }));
        response.end();
        return;
    }
    const hash = crypto.createHash('md5').update(pass).digest('hex');

    for (let i = 0; i < account.length; i++) {
        if (nick === account[i].nick && hash === account[i].pass) {
            response.writeHead(200, headers.plain);
            response.write(JSON.stringify({}));
            response.end();
            return;
        }
        if (nick === account[i].nick && hash !== account[i].pass) {
            response.writeHead(401, headers.plain);
            response.write(JSON.stringify({ error: 'password doenst match ' }));
            response.end();
            return;
        }
    }
    let newuser = {
        nick : nick,
        pass : hash,
        victories:0,
        games:0
    };
    addaccount(newuser);
    response.writeHead(200, headers.plain);
    response.write(JSON.stringify({}));
    response.end();
}

function addaccount(newuser){
    account.push(newuser);
    let data ={
        users: account
    };
    file.writeFileSync("accounts.json", JSON.stringify(data));
}
