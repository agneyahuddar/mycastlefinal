function setup() {
  createCanvas(800,400);
  createSprite(289, 300, 50, 300);
 createSprite(350, 300, 50, 200);
  createSprite(450, 300, 50, 200);
   createSprite(550, 300, 50, 200);
  createSprite(613, 300, 50, 300);
   createSprite(450, 200, 200, 30);
}

function draw() {
  background(255,255,255); 
  triangle(300, 200, 455, 150, 600, 200);
  drawSprites();
}