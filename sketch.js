
var fixedrectangle,movingrectangle

function setup() {
  createCanvas(800,400);
  fixedrectangle=createSprite(400, 200, 50, 50);
  movingrectangle=createSprite(250,300,50,50);
  fixedrectangle.shapeColor="blue"
  movingrectangle.shapeColor="blue"
}

function draw() {
  background(0); 
  drawSprites();
 
  movingrectangle.y=mouseY;
  movingrectangle.x=mouseX;

  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2&&
    movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2) {
   
    fixedrectangle.shapeColor="red"
    movingrectangle.shapeColor="red"
 
   }

  else{

    fixedrectangle.shapeColor="blue"
    movingrectangle.shapeColor="blue" 



  }
  
   

}