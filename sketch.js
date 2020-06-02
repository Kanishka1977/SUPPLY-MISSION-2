const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1,box2,ground2,ground3,box3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    ground1=new Ground(200,380,400,10);
     box2= new Box(175,100,50,50);
    ground2=new Ground(380,200,20,350);
    ground3=new Ground(20,200,20,350);
    box3=new Box(150,20,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    ground2.display();
    ground3.display();
    box3.display();
   
}