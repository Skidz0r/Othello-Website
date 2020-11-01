var jogador=0;
var lado_jogador=0;
var lado_pc=0;
var x = 0;

function password()
{
  var x = document.getElementById("minha_pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


 function onl(){ // função para fechar botão online
    var x = document.getElementById('online_text');
       if (x.style.display === 'none') {
           x.style.display = 'block';
       } else {
           x.style.display = 'none';
       }
 }

 function off(){  // função para fechar botão offline
    var y = document.getElementById('offline_text');
       if (y.style.display === 'none') {
           y.style.display = 'block';
       } else {
           y.style.display = 'none';
       }
 }

 function rules(){  // função para fechar botão regras
    var z = document.getElementById('rules_text');
       if (z.style.display === 'none') {
           z.style.display = 'block';
       } else {
           z.style.display = 'none';
       }
 }

var x = document.getElementById('online_text');
 document.getElementById('close_online').addEventListener('click', function(){
    x.style.display ='none';
 });

 var y = document.getElementById('offline_text');
  document.getElementById('close_offline').addEventListener('click', function(){
     y.style.display ='none';
  });

  var z = document.getElementById('rules_text');
   document.getElementById('close_rules').addEventListener('click', function(){
      z.style.display ='none';
   });

   var w = document.getElementById('dificuldade');
    document.getElementById('close_dificuldade').addEventListener('click', function(){
       w.style.display ='none';
    });

    var m = document.getElementById('escolha');
  document.getElementById('close_escolha').addEventListener('click', function(){
     m.style.display ='none';
  });

 document.getElementById('computador').addEventListener('click', function()
 {
       var z = document.getElementById('offline_text');
       z.style.display='none';
       var x = document.getElementById('dificuldade');
       x.style.display='block';
});

document.getElementById('Facil').addEventListener('click', function()
 {
   document.getElementById('escolha').style.display = 'block';
   dificuldade=1;
   document.getElementById('dificuldade').style.display = 'none';
});


document.getElementById('Medio').addEventListener('click', function()
{
  document.getElementById('escolha').style.display = 'block';
  dificuldade=1;
  document.getElementById('dificuldade').style.display = 'none';
});

document.getElementById('jogador_branco').addEventListener('click', function()
{
  lado_jogador=1;
  lado_pc=2;
  vez_pc=1;
  x=1;
  mudar_pecas(0);
  document.getElementById('total').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('logo-inicial').style.display='none';
  document.getElementById('area-principal').style.display='block';
  if(dificuldade==1)
  {
    setTimeout(function () { IA_facil(); }, 1000);
  }
  else if(dificuldade==2)
  {
    setTimeout(function () { IA_medio(); }, 1000);
  }
});
document.getElementById('jogador_preto').addEventListener('click', function()
{
  lado_jogador=2;
  lado_pc=1;
  vez_pc=0;
  x=2;
  document.getElementById('total').style.display = 'none';
  document.getElementById('game').style.display = 'block';
  document.getElementById('logo-inicial').style.display='none';
  document.getElementById('area-principal').style.display='block';
  document.getElementById('vez_preto').style.display = 'block';
});
document.getElementById('amigo').addEventListener('click', function()
{
window.alert("Futuramente disponivel");
});
