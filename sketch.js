const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Myworld,Myengine;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  Myengine = Engine.create();
  Myworld = Myengine.world;

  var groundoption={
    isStatic:true
  }

  ground = Bodies.rectangle(300,390,200,20,groundoption);
  World.add(Myworld, ground);

  var cirlceOption={
    restitution: 0.8
  }

  ball = Bodies.circle(60,120,70,cirlceOption);
  World.add(Myworld, ball);



}

function draw() {
  background("green"); 
  Engine.update(Myengine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,30);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,40,40);



  drawSprites();
}