let img;
let showImage = true;
let customFont;
let message = "Hello, world!";
let typedMessage = "";
let index = 0;
let typingSpeed = 50; 

function preload() {
  customFont = loadFont('JosefinSlab-VariableFont_wght.tff');
  img = loadImage('Yellow Star.png');
}
function setup() {
  createCanvas(400, 400);
  textFont(customFont);
  textSize(60);
}
function draw() {
  background(0, 0, 0, 0);
  image(img, 400, 400, 200, 200);
  text(typedMessage, 50, 50);
}
function mousePressed() {
  typedMessage = "";
  typeWriter();
}
function typeWriter() {
  typedMessage += message.charAt(index);
  index++;
  if (index < message.length) {
    setTimeout(typeWriter, typingSpeed);
  }
}