const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World
var drops=[]
 var maxDrops=100;
function preload(){
    boyimg=loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")
    thunderimg=loadImage("1.png","2.png","3.png","4.png")
}

function setup(){
 createCanvas(400,700)  
    engine=Engine.create()
    world=engine.world
    boy=createSprite(200,500,10,10)
    boy.addAnimation("boyi",boyimg)
    thunder=createSprite(200,200,10,10)
    thunder.addImage("thun",thunderimg)
    if(frameCount%150===0){
     for(var i=0;i<maxDrops;i++){
     drops.push(new Drop(random(0,400),random(0,400)))
          }
    }
}

function draw(){
 Engine.update(engine)
 background(0)
 for(var i=0;i<maxDrops;i++){
  drops[i].display()
     drops[i].updateY()
 }
 drawSprites()

 
}   

