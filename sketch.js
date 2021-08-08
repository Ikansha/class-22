const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var object;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  var object_options={
    
    restitution:1.0
  }
  object = Bodies.circle(200,200,20,object_options);
  World.add(world,object);

   var ground_options={
     isStatic:true
   }
   ground = Bodies.rectangle(200,390,400,20,ground_options);
   World.add(world,ground);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background("black");
  Engine.update(engine);
  ellipse(object.position.x,object.position.y,20,20);
  fill("red");
  rect(ground.position.x,ground.position.y,400,20)
}
 
