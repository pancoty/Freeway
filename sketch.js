let colidiu = false;

function setup() {
  createCanvas(600, 500);//TAMANHO
  trilhaS.loop();//SOM
}

function draw() {
  background(estrada);//FUNDO
  mostraA();
  movimentaA();
  limiteA();
  mostraC();
  movimentaC();
  voltaC();
  mostraP();
  marcaP();
  colisao();
}

function colisao(){//COLISAO CARRO E ATOR
  for (let a = 0; a < C.length; a += 1){//VARIAVEIS E LISTAS
      colidiu = collideRectCircle(xC[a], yC[a], comprimentoC, alturaC, xA, yA, 15);//COLISAO CARRO E ATOR

      if (colidiu){//SE COLIDIU
        colisaoS.play();//SOM
        yA = 461;//VOLTAR
      if (pontosA > 0){//SE PONTOS MAIOR QUE ZERO
            pontosA -= 1//PONTOS + 1
        }
      }
  }
}