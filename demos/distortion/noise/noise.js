let r;
let t1 = t2 = t3 = t4 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width/7;

  textSize(15);
  textAlign(CENTER);
}

function draw() {
  background(255);
  strokeWeight(4);
  noFill();

  stroke(255, 0, 0);
  ellipse(width/6, height/2, random(r));

  stroke(0);
  t1 += 1;
  ellipse(width/6*2, height/2, noise(t1)*r);

  t2 += 0.1;
  ellipse(width/6*3, height/2, noise(t2)*r);

  t3 += 0.01;
  ellipse(width/6*4, height/2, noise(t3)*r);

  t4 += 0.001;
  ellipse(width/6*5, height/2, noise(t4)*r);

  fill(0);
  noStroke();
  text('random(r)', width / 6 - 50, height / 2 + r, 100, 50);
  text('t += 1', width / 3 - 50, height / 2 + r, 100, 50);
  text('t += 0.1', width / 2 - 50, height / 2 + r, 100, 50);
  text('t += 0.01', width / 6*4 - 50, height / 2 + r, 100, 50);
  text('t += 0.001', width / 6*5 - 50, height / 2 + r, 100, 50);
}
