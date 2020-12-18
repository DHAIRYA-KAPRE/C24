const Engine = Matter.Engine; 
 const World = Matter.World; 
 const Bodies = Matter.Bodies; 
 var engine,world,box1,box2; 
 function setup(){ createCanvas(400,400);
   engine = Engine.create();
    world = engine.world;
   box1 = new box(200,200,20,20)
   box2 = new box(250,200,20,20);
   ground1 = new ground(200,400,400,50)
   pig1 = new pig(225,200)
   slab1 = new slab(200,180,100,PI/2)

     }
      function draw(){ background("orange");
     Engine.update(engine)
      box1.display()
      box2.display()
      ground1.display()
      pig1.display()
      slab1.display()
    }
