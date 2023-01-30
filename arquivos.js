let C;

let A;

let estrada;

//SONS
let trilhaS;
let colisaoS;
let pontoS;
//SONS

function preload(){//CARREGA OS ARQUIVOS
  estrada = loadImage("images/estrada.png");//CARREGA A IMAGEM DA ESTRADA
  A = loadImage("images/ator.png");//CARREGA A IMAGEM DO ATOR
  C1 = loadImage("images/carro_1.png");//CARREGA A IMAGEM DO CARRO 1
  C2 = loadImage("images/carro_3.png");//CARREGA A IMAGEM DO CARRO 2
  C3 = loadImage("images/carro_2.png");//CARREGA A IMAGEM DO CARRO 3
  C = [C1, C2, C3, C1, C2, C3];//LISTA DAS IMAGENS

  trilhaS = loadSound("sounds/trilha.mp3")//CARREGA O SOM DA TRILHA
  colisaoS = loadSound("sounds/colidiu.mp3")//CARREGA O SOM DA COLISAO
  pontoS = loadSound("sounds/pontos.wav")//CARREGA O SOM DO PONTO
}