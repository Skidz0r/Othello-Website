var tabela = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 0, 0, 0],
  [0, 0, 0, 2, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

document.getElementById(27).className = "branca";
document.getElementById(36).className = "branca";
document.getElementById(28).className = "preto";
document.getElementById(35).className = "preto";

function inserir_peca(rows,cols) {
  window.alert("Futuramente");
  var pecas = 4; 
  var x=2;
  while (pecas < 64) {
    if(x==1){
    if (tabela[rows-1][cols-1] != 0 || tabela[rows-1][cols] != 0 ||tabela[rows+1][cols] != 0 ||
      tabela[rows][cols-1] != 0 ||tabela[rows][cols+1] != 0 ||
      tabela[rows-1][cols+1] != 0 ||tabela[rows+1][cols-1] != 0 ||
      tabela[rows+1][cols+1] != 0 ||tabela[rows+1][cols] != 0) {
      selecionar_cell(cell, x);
    }
    x =2;
  }
  else if(x==2){
    if (tabela[rows-1][cols-1] != 0 || tabela[rows-1][cols] != 0 ||tabela[rows+1][cols] != 0 ||
      tabela[rows][cols-1] != 0 ||tabela[rows][cols+1] != 0 ||
      tabela[rows-1][cols+1] != 0 ||tabela[rows+1][cols-1] != 0 ||
      tabela[rows+1][cols+1] != 0 ||tabela[rows+1][cols] != 0) {
      selecionar_cell(cell, x);
    }
    x=1;
  }


  pecas++;

}
}



function selecionar_cell(cell, x) {
  if (x == 1)
    document.getElementById(cell).className = "branca";
  else if (x == 2) {
    document.getElementById(cell).className = "preto";
  }
}
