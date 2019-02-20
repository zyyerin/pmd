let r;
let t1 = t2 = 0, t3 = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = width / 5;

  textSize(15);
  textAlign(CENTER);
  fill(0);
  noStroke();
  text('*nothing*', width / 4 - 50, height / 2 + r, 100, 50);
  text('noiseSeed(0)', width / 2 - 50, height / 2 + r, 100, 50);
  text('noiseSeed(0)', width / 4 * 3 - 50, height / 2 + r, 100, 50);
}

function draw() {
  noFill();
  stroke(0);
  strokeWeight(0.2);

  for (let i = 0; i < 100; i++) {
    t1 += 0.1;
    ellipse(width / 4, height / 2, noise(t1) * r);
  }

  noiseSeed(0);
  for (let i = 0; i < 100; i++) {
    t2 += 0.1;
    ellipse(width / 2, height / 2, noise(t2) * r);

    t3 += 0.1;
    ellipse(width / 4 * 3, height / 2, noise(t3) * r);
  }

  noLoop();
}
