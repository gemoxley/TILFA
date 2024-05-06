let img;
let showImage = true;
let customFont;
let message = "Hello, world!";
let typedMessage = "";
let index = 0;
let typingSpeed = 50;

function preload() {
  customFont = loadFont('JosefinSlab-VariableFont_wght-webfont.woff');
  img = loadImage('Yellow Star.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textSize(60);
}

function draw() {
  background(0, 0, 0, 0);
  image(img, width/1.5, height/1.5, 200, 200);
  fill('white');
  text(typedMessage, width/1.5, height/1.5);
}

function mousePressed() {
  if (mouseX > width/1.5 && mouseX < width/1.5 + 200 && mouseY > height/1.5 && mouseY < height/1.5 + 200) {
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