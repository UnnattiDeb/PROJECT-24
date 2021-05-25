 const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , dustbin , paper;


function setup() {
	createCanvas(800, 400);
    rectMode(CENTER);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

    dustbin = new dustbin (720,390,100,10);
	paper = new paper(100,300,10);
	ground = bodies.rectangle(width/2,400,width,10);
	{
		isStatic = true
	}

    World.add(world , ground);
}


function draw() {
   background("black");
   rectMode(CENTER);

   dustbin.display();  
   paper.display();

  drawSprites();
 
}

function keyPressed (){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body , paperObject.body.position,{x:85, y:-85});
	}
}
			
		
	

