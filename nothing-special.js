let transparency = 255;
let customFont;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0); 
    canvas.style('z-index', '-1'); 
    textFont(customFont);
    textSize(60);
    textStyle(BOLD);
}
function preload() {
    customFont = loadFont('BethEllen-Regular.otf');
    img = loadImage('Black_Paper 1.png')
  }
function draw() {
    imageMode(CORNER);
    background(img);
    imageMode(CENTER);
    translate(width/6.7, height/1.2);
    transparency -= 0.5;
  if (transparency < 0) {
    transparency = 0;
  }
  fill(255,transparency); 
  text("It is nothing special to not want to be hurt.", 50, 100);
}