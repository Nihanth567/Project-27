
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(400,200,500,58);
	 bob1 = new Bob(120,400,50);
	 bob2 = new Bob(320,400,50);
	 bob3 = new Bob(420,400,50);
	 bob4 = new Bob(520,400,50);
	 bob5 = new Bob(620,400,50)

	 rope1=new Rope(bob1.body,roof.body,bobDiameter*2,0);
	 rope2=new Rope(bob2.body,roof.body,bobDiameter*2,0);
	 rope3=new Rope(bob3.body,roof.body,bobDiameter*2,0)
	 rope4=new Rope(bob4.body,roof.body,bobDiameter*2,0);
	 rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);
	 
	//bob1 = new Bob(100)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



