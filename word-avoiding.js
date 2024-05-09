//I found this code snippet online- I think it was made by USF professor Liat Berdugo!
// Like with a lot of the other code snippets, I've been making edits to suit my own projects.
// https://editor.p5js.org/lberdugo/sketches/STyuU73Vz

let shapes = [];
let poem = ["One", "past", "love", "pushed", "me", "against", "the", "wall"];
let numberOfShapes = 25;
let mouseThreshold = 15;
let moveDistance = 100;
let animateDistance = 100;
let customFont;

class Shape {
  constructor() {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.radius = random(30, 50);
    this.color = color(255);
    this.word = poem[floor(random(poem.length))]
  }
  updateShape() {
    let mouseDistance = int(dist(this.x, this.y, mouseX, mouseY));
    if (mouseDistance <= mouseThreshold) {
      this.x += random(-moveDistance, moveDistance);
      this.y += random(-moveDistance, moveDistance);
      this.x = lerp(this.x, random(this.x - moveDistance, this.x + moveDistance), 0.5);
      this.y = lerp(this.y, random(this.y - moveDistance, this.y + moveDistance), 0.5);
    }
  }
  animateShape(){
    this.x = lerp(this.x, random(this.x - animateDistance, this.x + animateDistance), 0.01);
    this.y = lerp(this.y, random(this.y - animateDistance, this.y + animateDistance), 0.01);
  }
  drawShape() {
    fill(this.color);
    textAlign(CENTER);
    textSize(this.radius);
    textFont(customFont);
    text(this.word, this.x, this.y);
  }
}
function preload() {
  customFont = loadFont('JosefinSlab-Bold.otf');
  img = loadImage('Black_Paper 1.png')
}
function setup() {
  noStroke();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0); 
  canvas.style('z-index', '-1'); 
  textFont(customFont);
  textSize(60);
  textStyle(BOLD);
  for (let i = 0; i < numberOfShapes; i++) {
    shapes.push(new Shape());
  }
}
function draw() {
    imageMode(CORNER);
    background(img);
    imageMode(CENTER);
    fill('white');
  for (let i = 0; i < shapes.length; i++) {
    shapes[i].updateShape();
    shapes[i].animateShape();
    shapes[i].drawShape();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}