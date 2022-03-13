var file;
var screen;
function setup() {
  createCanvas(windowWidth,windowHeight);
  file=createSprite(windowWidth,windowHeight,10,10);
 screen=createSprite(windowWidth,windowHeight,8000,8000);
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
    screen.shapeColor="blue"
  }
  if(keyDown(DOWN_ARROW)){
screen.shapeColor="yellow"
  
}
 drawSprites();
 
}








