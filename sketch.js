
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(660, 550, 70);
	bobObject2 = new Bob(730, 550, 70);
	bobObject3 = new Bob(800, 550, 70);
	bobObject4 = new Bob(870, 550, 70);
	bobObject5 = new Bob(940, 550, 70);
	roof = new Roof(width/2,60,800,80);  
	rope1 = new Rope(bobObject1.body, roof.body,-140,0);
	rope2 = new Rope(bobObject2.body, roof.body,-70,0);
	rope3 = new Rope(bobObject3.body, roof.body,0,0);
	rope4 = new Rope(bobObject4.body, roof.body,70,0);
	rope5 = new Rope(bobObject5.body, roof.body,140,0);
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-60,y:0})
	} 
}
