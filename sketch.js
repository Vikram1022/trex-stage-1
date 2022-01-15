var trex, trex_running, edges;
var groundImage;
var ground;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
 ground=createSprite(300,190,600,20) 
 ground.velocityX=-5;
 ground.addImage(groundImage);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
 
  trex.scale = 0.5;
  trex.x = 50
}


function draw(){
  
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  if(ground.x<0){
    ground.x=300
  }
  trex.velocityY = trex.velocityY + 0.5;
  
  
  trex.collide(ground)
  drawSprites();
}