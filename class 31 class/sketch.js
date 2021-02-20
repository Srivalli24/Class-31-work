const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    //a variable can store a single value of data that can be a string or a number or a boolean value or a sprite. 
    var string = "this is a string.";
    console.log(string);
    var numb = 4;
    console.log(numb);
    var bool = true;
    console.log (bool);
    //var sp = createSprite (x, y, width, height);
    var object;
    console.log (object);
    object = null;
    console.log (object);

    //an array is a data structure which can hold multiple values of data at a time 
    var arr1 = [1,2,3,4];
    console.log (arr1);
    //array can hold values of different data types
    var arr2 = [4,"srivalli", true, 5, "hi"];
    console.log (arr2);
    //an array can also store a list of arrays
    var arr3 = [[1,2],[300,234],[45,313]];
    console.log (arr3);
    //each value in an array is indexed by a number 
    //the first value/element has an index of 0
    console.log(arr2[1]);
    console.log(arr3[1][1]);
    //new value can be added to an array using push function
    arr2.push(false);
    console.log (arr2);
    //last value/element of an array can be removed using pop function
    arr2.pop();
    console.log (arr2);
     //last value/element of an array can be removed using pop function
     arr2.pop();
     console.log (arr2);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}