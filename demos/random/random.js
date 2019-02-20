let r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width/5;

  textSize(15);
  textAlign(CENTER);
  fill(0);
  noStroke();
  text('random()', width/4 - 50, height/2 + r, 100, 50);
  text('random(r)', width/2 - 50, height/2 + r, 100, 50);
  text('random(r/2, r)', width/4*3 - 50, height/2 + r, 100, 50);
}

function draw() {
  noFill();
  stroke(0);
  strokeWeight(0.2);
  for (let i = 0; i < 50; i++) {
    ellipse(width/4, height/2, random());
  }
  for (let i = 0; i < 50; i++) {
    ellipse(width/2, height/2, random(r));
  }
  for (let i = 0; i < 50; i++) {
    ellipse(width/4*3, height/2, random(r/2, r));
  }
  noLoop();
}
