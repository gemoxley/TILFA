let img;
let img2; 
let showImage = true;
let customFont;
let message = "Boston Pride 2023";
let typedMessage = "";
let index = 0;
let typingSpeed = 50;
let rotationAngle = 0;

function preload() {
  customFont = loadFont('JosefinSlab-Bold.otf');
  img2 = loadImage('Black_Paper 1.png');
  img = loadImage('2019.png');
  img3 = loadImage('2020.png');
  img4 = loadImage('2021.png');
  img5 = loadImage('2022.png');
  img6 = loadImage('2023.png');
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
  translate(width/1.5, height/2.2);
  rotationAngle += 0.02;
  rotate(rotationAngle);
  image(img, 0, 0, 500, 500);
  pop();
  fill('white');
  textWidth(500); 
  text(typedMessage, 900, height/4, 500);
  textWrap(WORD); 
}
function mousePressed() {
  if (dist(mouseX, mouseY, width/1.5, height/2.2) < 100) {
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