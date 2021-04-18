
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5,bob6;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(200,200,80);
  bob2=new Bob(500,200,80);
  bob3=new Bob(700,200,80);
  bob4=new Bob(900,200,80);
  bob5=new Bob(1000,200,80);

	groundObject=new Ground(width/2,670,width,20);
  roof=new Roof(650,100,700,40);
  rope1=new Rope(bob1.body,roof.body,-80,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  bob1.display();
  groundObject.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



