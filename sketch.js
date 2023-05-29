//Variaveis da bolinha
let xBolinha = 250;
let yBolinha = 200;
let diametro = 22;
let velocidadeXBolinha = 6
let velocidadeYBolinha = 6
let raio = diametro /2

//Variaveis raquete
let xRaquete = 5
let yRaquete = 150
let LarguraRaquete = 10
let AlturaRaquete = 90

//RaqueteOponente
let xRaqueteOponente = 585
let yRaqueteOponente = 150
let velocidadeYOponente

//placar do jogo
let MeusPontos = 0
let InimigoPontos = 0

function setup() {
  createCanvas(600,400);
}

//funções da bolinha
function draw() {
  background(0); //cor do fundo
MostraBolinha(); //Cria a bolinha
MoveBolinha(); //Faz a bolinha andar
ColidirComABorda(); //Verifica se ela colidiu com as bordas
bolinhaNaoFicaPresa();
  
//raquete
CriarRaquete(xRaquete,yRaquete);//Cria raquete
MovimentaRaquete();//Move raquete
ColisãoComRaquete();//Colide com raquete
  CriarRaquete(xRaqueteOponente,yRaqueteOponente);//Oponente
  ColisãoRaqueteOponente();
 MarcaPonto();
    
  //Oponente
  MovimentaRaqueteOponente();
  
  //Placar
  Placar()
;}
function MostraBolinha(){
circle(xBolinha,yBolinha,diametro,);
}
function MoveBolinha(){
xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}
function ColidirComABorda(){
if (xBolinha + raio > width ||
 xBolinha -raio < 0){
 velocidadeXBolinha *= -1
 }
if (yBolinha + raio > height ||
 yBolinha - raio < 0){
velocidadeYBolinha *= -1;
  }
 }
function CriarRaquete(x,y){
  rect(x,y,LarguraRaquete,AlturaRaquete);
 }  
function MovimentaRaquete(){
if (keyIsDown(UP_ARROW)){
  yRaquete -= 10
}
if (keyIsDown(DOWN_ARROW)){
  yRaquete += 10
}
}
function ColisãoComRaquete(){
  if(xBolinha - raio < xRaquete + LarguraRaquete && yBolinha - raio < yRaquete + AlturaRaquete && yBolinha + raio > yRaquete){
 velocidadeXBolinha *= -1;
}
}
function MovimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - AlturaRaquete / 2-30
  yRaqueteOponente +=velocidadeYOponente
}
function ColisãoRaqueteOponente(){
 if(xBolinha + raio > xRaqueteOponente+ LarguraRaquete && yBolinha + raio < yRaqueteOponente + AlturaRaquete + 5 && yBolinha + raio > yRaqueteOponente){
 velocidadeXBolinha *= -1;
     }
}
function Placar (){
  stroke(255);
  textAlign(CENTER);
  textSize(20);
  fill(color(128,0,128))
  rect(150,10,40,20)
    fill(255)
  text(MeusPontos, 170,26);
  fill(color(128,0,128))
  rect(450,10,40,20)
    fill(255)
  text(InimigoPontos, 470,26);
}
function MarcaPonto(){
  if (xBolinha > 590){
      MeusPontos += 1
      }
  if (xBolinha < 15){
    InimigoPontos += 1
  }
}
function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
