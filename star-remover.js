let img;
let img2; 
let showImage = true;
let customFont;
let message = "To best navigate this site, click on blue links to go backwards and pink ones to go forward.";
let typedMessage = "";
let index = 0;
let typingSpeed = 50;
let rotationAngle = 0;

function preload() {
  customFont = loadFont('JosefinSlab-VariableFont_wght-webfont.woff');
  img = loadImage('Yellow Star.png');
  img2 = loadImage('Black_Paper 1.png')
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
  textFont(customFont);
  textSize(60);
  textStyle(BOLD);

}
function draw() {
  imageMode(CORNER);
  background(img2);
  imageMode(CENTER);
  push();
  translate(width/1.5, height/1.5);
  rotationAngle += 0.01;
  rotate(rotationAngle);
  image(img, 0, 0, 200, 200);
  pop();
  fill('red');
  textWidth(500); 
  text(typedMessage, 50, height/2, 500);
  textWrap(WORD); 
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