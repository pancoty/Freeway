let pontosA = 0;
let pontosI = 0;

function mostraP(){
  stroke(0)//CONTORNO
  textAlign(CENTER);//ALINHAMENTO
  textSize(30);//TAMANHO
  fill(color(0, 0, 200))//COR
  text(pontosA, 30, 33);//MOSTRA MEUS PONTOS
  text(pontosI, 570, 33);//MOSTRA PONTOS INIMIGOS
}

function marcaP(){//MARCA PONTOS
  if (yA < -30){//MARCA MEUS PONTOS
      yA = 461;//VOLTAR
      pontosA += 1;//MARCA 1 PONTO
      pontoS.play();//SOM
  }
}