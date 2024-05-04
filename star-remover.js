let img;
let showImage = true;
let customFont;
let message = "Hello, world!";
let typedMessage = "";
let index = 0;
let typingSpeed = 50; 

function preload() {
  customFont = loadFont('path/to/your/font.ttf');
  img = loadImage('Yellow Star.png');
}
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}
function resized() {
  createCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0, 0);
}
function draw() {
  image(img, 400, 400, 200, 200);
}
function mousePressed() {
    remove(); 
}