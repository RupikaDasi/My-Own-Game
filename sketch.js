
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pacman1;


var blower1;

var engine;
var world;

var groundD;
var groundU;
var groundL;
var groundR;

var pacman1Img;
var pacman2Img;
var pacman3Img;
var pacman4Img;

var pacman5Img;
var pacman6Img;
var pacman7Img;
var pacman8Img;

var pacman9Img;
var pacman10Img;
var pacman11Img;
var pacman12Img;

var pacman13Img;
var pacman14Img;
var pacman15Img;
var pacman16Img;

var pacman17Img;
var pacman18Img;
var pacman19Img;
var pacman20Img;


function preload() {
 pacman1Img = loadImage("red_ball.png"); 
 pacman2Img = loadImage("yellow_ball.png"); 
 pacman3Img = loadImage("blue_ball.png"); 
 pacman4Img = loadImage("green_ball.png"); 

 pacman5Img = loadImage("pink_ball.png"); 
 pacman6Img = loadImage("banana_ball.png"); 
 pacman7Img = loadImage("baby_ball.png"); 
 pacman8Img = loadImage("mint_ball.png"); 


 pacman9Img = loadImage("red_ball.png"); 
 pacman10Img = loadImage("yellow_ball.png"); 
 pacman11Img = loadImage("blue_ball.png"); 
 pacman12Img = loadImage("green_ball.png"); 

 pacman13Img = loadImage("pink_ball.png"); 
 pacman14Img = loadImage("banana_ball.png"); 
 pacman15Img = loadImage("baby_ball.png"); 
 pacman16Img = loadImage("mint_ball.png"); 

 pacman17Img = loadImage("brown_ball.png"); 
 pacman18Img = loadImage("orange_ball.png"); 
 pacman19Img = loadImage("gray_ball.png"); 
 pacman20Img = loadImage("purple_ball.png"); 
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  groundD = new Ground (200, 395, 400, 20);
  groundU = new Ground (200, 5, 400, 20);
  groundL = new Ground (395, 200, 20, 400);
  groundR = new Ground (5, 200, 20, 400);


  var block_options = {
    isStatic: false,
    restitution: 0.25
  }

  pacman2 = Bodies.circle(170,100,15, block_options);
  World.add(world,pacman2);

  pacman1 = Bodies.circle(85,100,15, block_options);
  World.add(world,pacman1);

  pacman3 = Bodies.circle(255,100,15, block_options);
  World.add(world,pacman3);

  pacman4 = Bodies.circle(340,100,15, block_options);
  World.add(world,pacman4);


  pacman5 = Bodies.circle(85,200,15, block_options);
  World.add(world,pacman5);

  pacman6 = Bodies.circle(152,200,15, block_options);
  World.add(world,pacman6);

  pacman7 = Bodies.circle(255,200,15, block_options);
  World.add(world,pacman7);

  pacman8 = Bodies.circle(340,200,15, block_options);
  World.add(world,pacman8);


  pacman9 = Bodies.circle(170,100,15, block_options);
  World.add(world,pacman9);

  pacman10 = Bodies.circle(85,100,15, block_options);
  World.add(world,pacman10);

  pacman11 = Bodies.circle(255,100,15, block_options);
  World.add(world,pacman11);

  pacman12 = Bodies.circle(340,100,15, block_options);
  World.add(world,pacman12);


  pacman13 = Bodies.circle(85,200,15, block_options);
  World.add(world,pacman13);

  pacman14= Bodies.circle(152,200,15, block_options);
  World.add(world,pacman14);

  pacman15 = Bodies.circle(255,200,15, block_options);
  World.add(world,pacman15);

  pacman16 = Bodies.circle(340,200,15, block_options);
  World.add(world,pacman16);
  
  pacman17 = Bodies.circle(85,200,15, block_options);
  World.add(world,pacman17);

  pacman18= Bodies.circle(152,200,15, block_options);
  World.add(world,pacman18);

  pacman19 = Bodies.circle(255,200,15, block_options);
  World.add(world,pacman19);

  pacman20 = Bodies.circle(340,200,15, block_options);
  World.add(world,pacman20);

  button = createImg('pacman1.png');
  button.position(120,10);
  button.size(150,100);
  button.mouseClicked(airblow1);
  

  var rect_options = {
    isStatic: true,
  }
  
 
   
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() {
  background(255,255,255); 

  Engine.update(engine);
   imageMode(CENTER);

  background("black");


   ellipse(pacman2.position.x, pacman2.position.y, 15);
   
   ellipse(pacman1.position.x, pacman1.position.y, 15);

   ellipse(pacman3.position.x, pacman3.position.y, 15);

   ellipse(pacman4.position.x, pacman4.position.y, 15);
   

   ellipse(pacman5.position.x, pacman5.position.y, 15);
   
   ellipse(pacman6.position.x, pacman6.position.y, 15);

   ellipse(pacman7.position.x, pacman7.position.y, 15);

   ellipse(pacman8.position.x, pacman8.position.y, 15);


   ellipse(pacman9.position.x, pacman9.position.y, 15);
   
   ellipse(pacman10.position.x, pacman10.position.y, 15);

   ellipse(pacman11.position.x, pacman11.position.y, 15);

   ellipse(pacman12.position.x, pacman12.position.y, 15);
   

   ellipse(pacman13.position.x, pacman13.position.y, 15);
   
   ellipse(pacman14.position.x, pacman14.position.y, 15);

   ellipse(pacman15.position.x, pacman15.position.y, 15);

   ellipse(pacman16.position.x, pacman16.position.y, 15);


   ellipse(pacman17.position.x, pacman17.position.y, 15);
   
   ellipse(pacman18.position.x, pacman18.position.y, 15);

   ellipse(pacman19.position.x, pacman19.position.y, 15);

   ellipse(pacman20.position.x, pacman20.position.y, 15);
   
   
 image(this.pacman2Img, pacman2.position.x, pacman2.position.y,30,30);
 image(this.pacman1Img, pacman1.position.x, pacman1.position.y,30,30);
 image(this.pacman3Img, pacman3.position.x, pacman3.position.y,30,30);
 image(this.pacman4Img, pacman4.position.x, pacman4.position.y,30,30);

 image(this.pacman5Img, pacman5.position.x, pacman5.position.y,30,30);
 image(this.pacman6Img, pacman6.position.x, pacman6.position.y,30,30);
 image(this.pacman7Img, pacman7.position.x, pacman7.position.y,30,30);
 image(this.pacman8Img, pacman8.position.x, pacman8.position.y,30,30);


 image(this.pacman9Img, pacman9.position.x, pacman9.position.y,30,30);
 image(this.pacman10Img, pacman10.position.x, pacman10.position.y,30,30);
 image(this.pacman11Img, pacman11.position.x, pacman11.position.y,30,30);
 image(this.pacman12Img, pacman12.position.x, pacman12.position.y,30,30);

 image(this.pacman13Img, pacman13.position.x, pacman13.position.y,30,30);
 image(this.pacman14Img, pacman14.position.x, pacman14.position.y,30,30);
 image(this.pacman15Img, pacman15.position.x, pacman15.position.y,30,30);
 image(this.pacman16Img, pacman16.position.x, pacman16.position.y,30,30);


 image(this.pacman17Img, pacman13.position.x, pacman17.position.y,30,30);
 image(this.pacman18Img, pacman14.position.x, pacman18.position.y,30,30);
 image(this.pacman19Img, pacman15.position.x, pacman19.position.y,30,30);
 image(this.pacman20Img, pacman16.position.x, pacman20.position.y,30,30);




groundD.show();
groundU.show();
groundL.show();
groundR.show();

  drawSprites();
}  

    function airblow1()
    {
      Matter.Body.applyForce(pacman1,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman2,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman3,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman4,{x:0,y:0},{x:0.01,y:0});

      Matter.Body.applyForce(pacman5,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman6,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman7,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman8,{x:0,y:0},{x:0.01,y:0});


      Matter.Body.applyForce(pacman9,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman10,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman11,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman12,{x:0,y:0},{x:0.01,y:0});

      Matter.Body.applyForce(pacman13,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman14,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman15,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman16,{x:0,y:0},{x:0.01,y:0});

      Matter.Body.applyForce(pacman17,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman18,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman19,{x:0,y:0},{x:0.01,y:0});
      Matter.Body.applyForce(pacman20,{x:0,y:0},{x:0.01,y:0});

     } 
