function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(600, 400, 50, 80);
  fixedrect = createSprite(400,200,80,30);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2 = createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  gameObject4 = createSprite(400,100,50,50);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
  gameObject4.shapeColor = "green";
}

function draw() {
  background("black");  
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  textSize(20);
  //text("distance = "+(movingrect.x-fixedrect.x),200,300);
  
  if(isTouching(gameObject3,movingrect)){
    movingrect.shapeColor = "blue";
    gameObject3.shapeColor = "blue" 
  }
  else{
    movingrect.shapeColor = "green";
    gameObject3.shapeColor = "green"  
  }
  drawSprites();
}

