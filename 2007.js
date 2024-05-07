let img;
let showImage = true;
let customFont;
let message = "Circa 2007- I wore a bicycle helmet CONSTANTLY and refused to remove it.";
let typedMessage = "";
let index = 0;
let typingSpeed = 50;
let rotationAngle = 0;

function preload() {
  customFont = loadFont('JosefinSlab-VariableFont_wght-webfont.woff');
  img = loadImage('Kid.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textSize(60);
  textStyle(BOLD);
}
function draw() {
  background(0, 0, 0, 0);
  imageMode(CENTER);
  push();
  translate(width/1.5, height/1.5);
  rotationAngle += 0.1;
  rotate(rotationAngle);
  image(img, 0, 0, 200, 200);
  pop();
  fill('white');
  text(typedMessage, width/1.9, height/1.9);
}
function mousePressed() {
  if (dist(mouseX, mouseY, width/1.5, height/1.5) < 100) {
    typedMessage = "";
    typeWriter();
  }
}
function typeWriter() {
  typedMessage += message.charAt(index);
  index++;
  if (index < message.length) {
    setTimeout(typeWriter, typingSpeed);
  }
}