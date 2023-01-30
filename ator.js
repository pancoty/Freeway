let xA = 150;
let yA = 461;
let alturaA = 35;
let comprimentoA = 35;

function mostraA(){//MOSTRAR ATOR
  image(A, xA, yA, alturaA, comprimentoA);//MOSTRAR ATOR
}

function movimentaA(){
  if (keyIsDown(UP_ARROW)){//SE SETA PARA CIMA
      yA -= 3;//ATOR VAI PARA CIMA
  }
  if (keyIsDown(DOWN_ARROW)){//SE SETA PARA BAIXO
      yA += 3;//ATOR VAI PARA BAIXO
  }
}

function limiteA(){//LIMITE
  if (yA >= 461){//SE SAIR DA TELA
      yA = 461;//VOLTAR
  }
}