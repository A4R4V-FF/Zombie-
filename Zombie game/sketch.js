var shooter,shooter1,shooter2;
var zombie1img,zombie2img,zombie1,zombie2,zombieGrp;
var backgroundImg,background;
var life,lifeImg;
var bullet,bulletgrp;
var Score = 0;
function preload(){

//backgroundImg = loadImage("assets/background.jpg");
//shooter1 = loadImage("assets/shooter1.png");
//shooter2 = loadImage("assets/shooter2.png");
//zombie1 = loadImage("assets/Zombie1.png");
//zombie2 = loadImage("assets/Zombie2.png");
//zombie3 = loadImage("assets/Zombie3.png");
//lifeImg = loadImage("assets/life.png");

backgroundImg = loadImage("background.jpg");
shooter1 = loadImage("shooter1.png");
shooter2 = loadImage("shooter2.png");
zombie1img = loadImage("Zombie1.png");
zombie2img = loadImage("Zombie2.png");

lifeImg = loadImage("life.png");
}


function setup(){
createCanvas(windowWidth,windowHeight);
//createCanvas(1000,1000);
background = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
background.addImage('background.jpg',backgroundImg);
background.scale =2.75;

shooter = createSprite(displayWidth-1150,displayHeight-300,50,50);
shooter.addImage('shooter1.png',shooter1);
shooter.scale = 0.7;
zombieGrp = new Group();
bulletgrp = new Group();

}



function draw(){
 
 createzombie();   
 drawSprites();
 textSize(30);
 fill("green");
 text("ZombieCount= " +Score,displayWidth-1800,displayHeight/2-480);
textAlign(LEFT);
 if(keyDown("RIGHT_ARROW")){
     shooter.x = shooter.x+20;
 }
 if(keyDown("LEFT_ARROW")){
    shooter.x = shooter.x-20;
}
if(keyWentDown("SPACE")){
    bullet = createSprite(displayWidth-1150,shooter.y-87,20,10);
    bullet.velocityY = -20;
    bullet.velocityX = -20;
    bulletgrp.add(bullet);
   // shooter.depth = bullet.depth;
   // shooter = shooter.depth+2;
    bullet.x = shooter.x;
 
}
if(Score>=10){
  fill("white");
 text("You're a pro!",displayWidth-1450,displayHeight/2-480);
 textAlign(CENTER);
}
if(Score>=100){
  fill("yellow");
 text("WAY TO GO!",displayWidth-1100,displayHeight/2-480);
 textAlign(CENTER);
}
if(Score>=150){
  fill("white");
 text("YOU'RE A MASTER!",displayWidth-750,displayHeight/2-480);
 textAlign(CENTER);
}
}



//creating zombie grp
function createzombie(){
if (frameCount%100==0){
zombie1 = createSprite(random(100,1000),random(100,500),20,20);
zombie1.addImage(zombie1img);
zombie1.scale = 0.2;
zombie1.debug =true;
zombie1.setCollider("rectangle",0,0,400,400)
zombieGrp.add(zombie1)

zombie2 = createSprite(random(100,1000),random(100,500),20,20);
zombie2.addImage(zombie2img);
zombie2.scale = 0.14;
zombie2.debug =true;
zombie2.setCollider("rectangle",0,0,400,400)
zombieGrp.add(zombie2)
}

if(zombieGrp.isTouching(bulletgrp)){
    for(var i = 0;i < zombieGrp.length;i++){
      if(zombieGrp[i].isTouching(bulletgrp)){
        zombieGrp[i].destroy();
        bulletgrp.destroyEach();
        Score = Score+1;

      }
    }
   }
}

