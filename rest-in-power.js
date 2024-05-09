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
    customFont = loadFont('JosefinSlab-Bold.otf');
    img = loadImage('Black_Paper 1.png')
  }
function draw() {
    imageMode(CORNER);
    background(img);
    imageMode(CENTER);
    translate(width/2.9, height/3.9);
    transparency -= 0.5;
  if (transparency < 0) {
    transparency = 0;
  }
  fill(255,transparency);
  text("Alex Taylor Franco", -350, 100);
  text("Diamond Brigman", -350, 200);
  text("Kitty Monroe", -350, 300);
  text("Nex Benedict", -350, 400);
  text("Meraxes Medina", -350, 500);
  text("Righteous TK 'Chevy' Hill", 350, 100);
  text("Emma Garcia", 350, 200);
  text("Tee 'Lagend Billions' Arnold", 350, 300);
  text("River Nevaeh Goddard", 350, 400);
  text("Andrea Doria Dos Passos", 350, 500);
}