let img;
let showImage = true;

function preload() {
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
    image(img, 0, 0, width, height);
}
function mousePressed() {
    remove(); 
}