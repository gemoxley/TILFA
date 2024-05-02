let img;
let showImage = true;

function preload() {
  img = loadImage('Yellow Star.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(220);
  image(img, 0, 0);
  if (showImage) {
    image(img, 0, 0, width, height);
  }
}
function mousePressed() {
    showImage = !showImage;
}