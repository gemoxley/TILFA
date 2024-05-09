//Thank you to p5.js user @zhiying0819 for the base of the code!

const word = "Sure.";
const fSize = 300; 

let myFont;
let points;
let wiggle = 1;
let pointColors = [];

function preload(){
  myFont = loadFont("BethEllen-Regular.ttf");
  img = loadImage('Black_Paper 1.png');
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
  points = myFont.textToPoints(word, 0, 0, fSize);
  for (let i = 0; i < points.length; i++) {
    pointColors[i] = random(["#FFA7F6", "#FFFFFF", "#44C7FF"]);
    //Make all the points STAY the color they're supposed to be instead of flashing colors
  }
}
function draw() {
  imageMode(CORNER);
  translate(width/1.95, height/1.5);
  background(img);
  imageMode(CENTER);
  for (let i = 0; i < points.length; i++) {
    let x = points[i].x + random(-wiggle, wiggle);
    let y = points[i].y + random(-wiggle, wiggle);
    fill(pointColors[i]);
    ellipse(x, y, 7);
  }
}