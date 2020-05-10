const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world; 
var ground,base,stand,shooter;

function setup() {

  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(600,height,1200,20);
  base=new Base(600,400,200,25);
  stand=new Stand(600,400,45,95)
  shooter=new Shooter(600,400,200,40)
}

function draw() {
  background(255,77,0); 
  Engine.update(engine);
  ground.display();
  base.display();
  stand.display();
  shooter.display();
  drawSprites();
}

/*const Engine = Matter.Engine; 
const World= Matter.World; 
const Bodies = Matter.Bodies;

var engine, world; 
var box1,box2,box3,box4,box5,ground,pig1,log1,bird1;

function setup() {

  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new box(700,320,50,50);
  box2=new box(900,320,50,50);
  ground=new Ground(600,height,1200,20);
  pig1=new Pig(800,200);
  log1=new Log(800,180,300,PI/2);
  bird1=new Bird(200,200);
}

function draw() {
  background(75,75,75); 
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  log1.display();
  bird1.display();
  console.log(log1.body.angle);

  drawSprites();
}*/