var ship;
var sea;
var ship1;
function preload() {
seaImg = loadImage("sea.png");
ship = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}



function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,20,10);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  ship1 = createSprite(200,230,20,10);
  ship1.scale = 0.4;
  ship1.addAnimation("shiptraveling", ship);
}


function draw() {
  background("blue");
  if(sea.x < 0) {
    sea.x = sea.width/2
 }
  drawSprites();
}