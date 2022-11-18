let witch;
function preload(){
  witch = loadImage ('image/witch.png');
}
function setup() {
  createCanvas(1040, 700);
  
}

function draw() {
  background(220);
  fill(66, 135, 245);
  strokeWeight(5);
  ellipse(20,20,20,20);
  circle(50,50,10);
  image(witch,100,100);

}
