var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var database;
var cars,car1,car2,car3,car4;
var car_1,car_2,car_3,car_4,track_1,ground;
function preload(){
  car_1=loadImage("images/car1.png");
  car_2=loadImage("images/car2.png");
  car_3=loadImage("images/car3.png");
  car_4=loadImage("images/car4.png");
track_1=loadImage("images/track.jpg");
ground=loadImage("images/ground.png");
}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
    background("white");
if(playerCount===4){
  game.update(1);

}
if(gameState===1){
  clear();
  game.play();
}
if(gameState===2){
  game.END();
}
}

