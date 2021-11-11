
var trex ,trex_running;
var edges;
var solo,solo_run;
function preload(){ // funç~;ao que carregar todas as imagens e animações
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
solo_run= loadImage("ground2.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,200)
  
  //crie um sprite de trex
 // solo = createSprite(300,190,600,20);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  edges = createEdgeSprites();
 
  solo = createSprite(300,190,600,20);
  solo.addImage("run",solo_run)
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5; // gravidade

  trex.collide(solo)
solo.velocityX = -5
if(solo.x<0){
solo.x=solo.width/2
}


  drawSprites();

}