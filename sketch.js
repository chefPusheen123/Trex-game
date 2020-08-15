var trex,trex1
var ground,ground1
var cloud,cloud1
var ob,ob1,ob2,ob3,ob4,ob5,ob6

function preload(){
  trex1=loadAnimation("trex1.png","trex3.png","trex4.png");
  ob1=loadImage("obstacle1.png");
   ob2=loadImage("obstacle2.png");
   ob3=loadImage("obstacle3.png");
   ob4=loadImage("obstacle4.png");
   ob5=loadImage("obstacle5.png");
   ob6=loadImage("obstacle6.png");
  
  ground1=loadImage("ground2.png");
  cloud1=loadImage("cloud.png");
}
function setup() {
  createCanvas(400, 400);
  trex=createSprite(50,370,10,10);
  trex.addAnimation("trex1",trex1)
  trex.scale=0.5
  ground=createSprite(200,380,400,20);
  ground.addAnimation("ground2",ground1)
}

function draw() {
  background(180);
  drawSprites();
  spawnClouds();
  spawnObstacles();
  if(keyDown("space")&& trex.y >=350){
    trex.velocityY=-10;
  }
  createEdgeSprites();
  trex.collide(ground);
  trex.velocityY=trex.velocityY+0.5;
  ground.velocityX=-2;
  if(ground.x<0){
ground.x=ground.width/2;
    //console.log(trex.y);
  }
  
  
}
function spawnClouds(){
  if(frameCount%60===0){
cloud = createSprite(400,random(120,220),10,10)
  cloud.addImage("cloud",cloud1)
  cloud.velocityX=-4;
    cloud.scale=0.5;
  }
}

function spawnObstacles(){
 if(frameCount%60===0){
  obstacle = createSprite(400,365,10,40);
   var rand = Math.round(random(1,6));
   console.log(rand);
   switch(rand){
     case 1:  obstacle.addImage("obstacle1.png",ob1);
       break;
       case 2:  obstacle.addImage("obstacle2.png",ob2);
       break;
       case 3:  obstacle.addImage("obstacle1.png",ob3);
       break;
       case 4:  obstacle.addImage("obstacle1.png",ob4);
       break;
       case 5:  obstacle.addImage("obstacle1.png",ob5);
       break;
       case 6:  obstacle.addImage("obstacle1.png",ob6);
       break;
       default:break;
   }
  
   obstacle.velocityX=-6;
   obstacle.scale=0.5;
 }
  
}