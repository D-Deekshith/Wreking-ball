const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var ground,ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26,box27,box28,box29,box30;
var holder;

var slingShot;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,750,800,20);

  holder = new Holder(200,2,1,1);

box1 = new Box(690,720,50,50);
box2 = new Box(640,720,50,50);
box3 = new Box(590,720,50,50);
box4 = new Box(690,660,50,50);
box5 = new Box(640,660,50,50);
box6 = new Box(590,660,50,50);
box7 = new Box(690,600,50,50);
box8 = new Box(640,600,50,50);
box9 = new Box(590,600,50,50);
box10 = new Box(690,540,50,50);
box11 = new Box(640,540,50,50);
box12 = new Box(590,540,50,50);
box13 = new Box(690,480,50,50);
box14 = new Box(640,480,50,50);
box15 = new Box(590,480,50,50);
box16 = new Box(690,420,50,50);
box17= new Box(640,420,50,50);
box18 = new Box(590,420,50,50);
box19 = new Box(690,360,50,50);
box20 = new Box(640,360,50,50);
box21 = new Box(590,360,50,50);
box22 = new Box(690,300,50,50);
box23 = new Box(640,300,50,50);
box24 = new Box(590,300,50,50);
box25 = new Box(690,240,50,50);
box26 = new Box(640,240,50,50);
box27 = new Box(590,240,50,50);
box28 = new Box(690,180,50,50);
box29 = new Box(640,180,50,50);
box30 = new Box(590,180,50,50);

  ball = new Ball(200,650,40);

  slingShot = new SlingShot(ball.body,holder.body,1,0);
}

function draw() {
  background(250);  

  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  ball.display();

  slingShot.display();

  holder.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}