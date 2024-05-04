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
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}
function resized() {
  createCanvas(windowWidth, windowHeight);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(customFont);
  textSize(60);
  background(0, 0, 0, 0);
}
function draw() {
  image(img, 400, 400, 200, 200);
  text(typedMessage, 50, 50);
  typedMessage = "In order to best navigate this website, click on solid pink words to proceed to the next page when you're finished reading.";
  index = 0;
  setTimeout(typeWriter, typingSpeed);
}
function mousePressed() {
    remove(); 
}
function typeWriter() {
  typedMessage += message.charAt(index);
  index++;
  if (index < message.length) {
    setTimeout(typeWriter, typingSpeed);
  }
}