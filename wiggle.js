var circleWidth = 30;
var spacing = 55;
function setup() {
  createCanvas(400, 400);
  frameRate (5);
}
function draw() {
  background(0);
  for (var x = 0; x < width; x += spacing) {
  for (var y = 0; y < width; y += spacing) {
      var wiggle = random(-15, 15);
      let randomColor = random(100);
    if (randomColor < 33) {
      fill(91, 206, 250);
    } else if (randomColor < 66) {
      fill(245, 169, 184);
    } else {
      fill(255);
    }
      text("⚧",x + wiggle, y + wiggle);
    }
  }
}
//Thank you to p5.js user @melandin for helping with the base of the code!