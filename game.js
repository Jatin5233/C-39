class Game{
constructor(){

}    
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();

    })

}
update(state){
    database.ref("/").update({
      gameState:state  
    })

}
 async start(){
    if(gameState===0){
        player=new Player();
        var playerRef=await database.ref("playerCount").once("value");
        if(playerRef.exists()){
            playerCount=playerRef.val();
            player.getCount();
        }
        form=new Form();
        form.display();
        
      
    }
    car1=createSprite(100,200);
    car1.addImage(car_1);
    car2=createSprite(300,200);
    car2.addImage(car_2);
    car3=createSprite(500,200);
    car3.addImage(car_3);
    car4=createSprite(700,200);
    car4.addImage(car_4);
    cars=[car1,car2,car3,car4];
    }
play(){
    form.hide();
   // textSize(30);
    //text("GAME START",120,100);
    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        background(ground);
        image(track_1,0,-displayHeight*4,displayWidth,displayHeight*5);
var index=0;
var x=195;
var y;

//var display_position=130;
for (var plr in allPlayers){
    index++;
    x+=225;
    y=displayHeight-allPlayers[plr].distance;
    cars[index-1].x=x;

    cars[index-1].y=y;
    if(index===player.index){
        //cars[index-1].shapeColor="red";
        push();
        strokeWeight(2);
        fill(255,0,0);
        ellipse(x,y,60,60);
        pop();
       // var lable=createButton(player.name)
        //lable.position(x,y+50);
        fill(255)
        text(player.name,x-15,y-50);
      camera.position.x=displayWidth/2;
      camera.position.y=cars[index-1].y;
      
    }
    
   /* display_position+=20;
textSize(15);
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);*/
}
    }
    if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=50;
player.update();
    }
    if(player.distance>4200){
        gameState=2;
    }
    drawSprites();
}
END(){
    console.log("game ended");
}
}