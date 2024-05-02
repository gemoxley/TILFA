const word = "Sure.";
let myFont;
let points;
const fSize = 130; 
let wiggle = 1;
function preload(){
  myFont = loadFont("BethEllen-Regular.ttf");
}
function setup() {
  createCanvas(500, 500);
  points = myFont.textToPoints(word, 0, 0, fSize);
}
function draw() {
  background(0);
  translate(50,300);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + random(-wiggle, wiggle);
    let y = points[i].y + random(-wiggle, wiggle);
    fill(255);
    ellipse(x, y, 5);
  }
}
//Thank you to p5.js user @zhiying0819 for the base of the code!