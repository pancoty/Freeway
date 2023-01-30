let alturaC = 55;
let comprimentoC = 45;
let yC = [52, 122, 192, 265, 329, 398];
let xC = [600, 600, 600, 600, 600, 600];
let velocidadeC = [3, 2, 4, 1, 5, 2];

function mostraC(){//MOSTRAR CARRO
  for (let a = 0; a < C.length; a += 1){//VARIAVEIS E LISTAS
      image(C[a], xC[a], yC[a], alturaC, comprimentoC);//MOSTRAR CARRO
  }
}

function movimentaC(){//MOVIMENTAR CARRO
  for (let a = 0; a < velocidadeC.length; a += 1){//VARIAVEIS E LISTAS
      xC[a] -= velocidadeC[a];//VELOCIDADE DO CARRO
  }
}

function voltaC(){//VOLTAR CARRO
  for (let a = 0; a < xC.length; a += 1){//VARIAVEIS E LISTAS
      if (passouC(xC[a])){//SE PASSOU
          xC[a] = 600;//VOLTAR CARRO
      }
  }
}

function passouC(xC){//PASSOU DA TELA
  return xC < -70;//PASSOU DA TELA
}

