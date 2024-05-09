//Thank you to p5.js user @zhiying0819 for the base of the code!

const word = "Sure.";
const fSize = 130; 

let myFont;
let points;
let wiggle = 1;

function preload(){
  myFont = loadFont("BethEllen-Regular.ttf");
  img = loadImage('Black_Paper 1.png');
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
  points = myFont.textToPoints(word, 0, 0, fSize);
}
function draw() {
    imageMode(CORNER);
    background(img);
    imageMode(CENTER);
    translate(50,300);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + random(-wiggle, wiggle);
    let y = points[i].y + random(-wiggle, wiggle);
    fill(255);
    ellipse(x, y, 5);
  }
}