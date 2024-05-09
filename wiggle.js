//Thank you to p5.js user @melandin for helping with the base of the code!

var circleWidth = 30;
var spacing = 55;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
  frameRate (5);
}
function preload() {
  customFont = loadFont('JosefinSlab-Bold.otf');
  img = loadImage('Black_Paper 1.png')
}
function draw() {
  imageMode(CORNER);
  background(img);
  imageMode(CENTER);
  for (var x = 0; x < width; x += spacing) {
  for (var y = 0; y < width; y += spacing) {
      var wiggle = random(-15, 15);
      let randomColor = random(100);
    if (randomColor < 33) {
      fill(91, 206, 250);
    } else if (randomColor < 66) {
      fill(245, 169, 184);
    } else {
      fill(255);
    }
      text("⚧",x + wiggle, y + wiggle);
    }
  }
}