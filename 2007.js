let img;
let img2; 
let showImage = true;
let customFont;
let message = "Circa 2007- I used to wear a bicycle helmet constantly and REFUSED to take it off.";
let typedMessage = "";
let index = 0;
let typingSpeed = 50;
let rotationAngle = 0;

function preload() {
  customFont = loadFont('JosefinSlab-Bold.otf');
  img = loadImage('Kid.png');
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
  translate(width/1.5, height/1.3);
  rotationAngle += 0.02;
  rotate(rotationAngle);
  image(img, 0, 0, 350, 350);
  pop();
  fill('white');
  textWidth(500); 
  text(typedMessage, 1200, height/3, 500);
  textWrap(WORD); 
}
function mousePressed() {
  if (dist(mouseX, mouseY, width/1.5, height/1.3) < 100) {
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