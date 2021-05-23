var bgImg
var lukasImg
var rock
var obstacle
var rockImg
var obstacleImg
var coin1,coin2,coin3,coin4,coin5
var coinImg
function preload() {
  bgImg=loadImage("bg1.jpg");
  rockImg=loadImage("Rock.png");
  obstacleImg=loadImage("Ball.png");
  coinImg=loadImage("Coin.png");
  lukasImg=loadImage("Lukasr.png");
}
function setup() {
  createCanvas(600, 600);
  wall1=createSprite(5,250,25,550);
  wall1.shapeColor="green";
  wall2=createSprite(300,5,600,25);
  wall2.shapeColor="green";
  wall3=createSprite(595,300,25,600);
  wall3.shapeColor="green";
  wall4=createSprite(200,595,434,25);
  wall4.shapeColor="green";
  wall5=createSprite(550,595,133,29);
  wall5.shapeColor="green";
  wall6=createSprite(550,510,280,22);
  wall6.shapeColor="green";
  wall7=createSprite(354,511,15,171);
  wall7.shapeColor="green";
  wall8=createSprite(431,430,167,15);
  wall8.shapeColor="green";
  wall9=createSprite(507,263,15,320);
  wall9.shapeColor="green";
  wall10=createSprite(452,110.1,100,16);
  wall10.shapeColor="green";
  wall11=createSprite(437,273,15,165);
  wall11.shapeColor="green";
  wall12=createSprite(337,198,187,15);
  wall12.shapeColor="green";
  wall13=createSprite(336,102,15,187);
  wall13.shapeColor="green";
  wall14=createSprite(368,245,15,90);
  wall14.shapeColor="green";
  wall15=createSprite(285,285,180,12);
  wall15.shapeColor="green";
  wall16=createSprite(203,188,15,187);
  wall16.shapeColor="green";
  wall17=createSprite(178,92,220,15);
  wall17.shapeColor="green";
  wall18=createSprite(240,363.2,240,15);
  wall18.shapeColor="green";
  wall19=createSprite(127,275,15,180);
  wall19.shapeColor="green";
  wall20=createSprite(67,383,15,410);
  wall20.shapeColor="green";
  wall21=createSprite(97,186,75,15);
  wall21.shapeColor="green";
  wall22=createSprite(200,397,15,70);
  wall22.shapeColor="green";
  wall23=createSprite(201,502,150,13);
  wall23.shapeColor="green";
  wall24=createSprite(131,510,15,155);
  wall24.shapeColor="green";
  wall25=createSprite(272,462,12,70);
  wall25.shapeColor="green";

  lukas=createSprite(20,560,10,10);
  lukas.addImage(lukasImg);
  lukas.scale=0.06;
  rock=createSprite(415,60,5,5);
  rock.velocityY=3;
  rock.scale=0.03;
  rock.addImage(rockImg);
  obstacle=createSprite(44,42,15,15);
  obstacle.addImage(obstacleImg);
  obstacle.scale=0.03;
  coin1=createSprite(290,48,10,10);
  coin1.addImage(coinImg);
  coin1.scale=0.04


}
function draw() {
  background(bgImg);
  stroke(220);
  for (var j=0; j<=600; j=j+50){
    line(0,j, 600,j);
  }
  for (var i=0; i<=600 ; i=i+50){
    line(i,0,i,600);
  }
  text(mouseX + "," + mouseY, mouseX, mouseY)
  //game code
  if (keyDown(RIGHT_ARROW)){
    lukas.x=lukas.x+2
    lukas.mirrorX(-1);
    lukas.rotation=0  
    
  }
  if (keyDown(LEFT_ARROW)){
    lukas.x=lukas.x-2;
    lukas.mirrorX(1);
    lukas.rotation=0  
  }
  if (keyDown(UP_ARROW)){
    lukas.y=lukas.y-2;
  lukas.rotation=-50  
  }
  if (keyDown(DOWN_ARROW)){
    lukas.y=lukas.y+2;
  lukas.rotation=+50  
  }
  rock.bounceOff(wall10);
  rock.bounceOff(wall2);
  if (rock.isTouching(lukas)){
    lukas.x=20;
    lukas.y=565;
  }
  if(lukas.isTouching(wall1)||lukas.isTouching(wall2)||lukas.isTouching(wall3)||lukas.isTouching(wall4)||lukas.isTouching(wall5)||
  lukas.isTouching(wall6)||lukas.isTouching(wall7)||lukas.isTouching(wall8)||lukas.isTouching(wall9)||
  lukas.isTouching(wall10)||lukas.isTouching(wall11)||lukas.isTouching(wall12)||lukas.isTouching(wall13)||
  lukas.isTouching(wall14)||lukas.isTouching(wall15)||lukas.isTouching(wall16)||lukas.isTouching(wall17)||
  lukas.isTouching(wall18)||lukas.isTouching(wall19)||lukas.isTouching(wall20)||lukas.isTouching(wall21)||
  lukas.isTouching(wall22)||lukas.isTouching(wall23)||lukas.isTouching(wall24)||lukas.isTouching(wall25)){
    lukas.x=20;
    lukas.y=560;
  }
  if(lukas.y<162){
    obstacle.velocityY=3;
  }
  if(lukas.isTouching(obstacle)){
    lukas.x=20;
    lukas.y=560;
  }
  obstacle.bounceOff(wall2);
  obstacle.bounceOff(wall4);

  drawSprites();
}
