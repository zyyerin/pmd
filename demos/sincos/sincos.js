let amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  amp = height * 0.1;
}

function draw() {
  noFill();
  strokeWeight(1);
  let a1 = a2 = a3 = 0;

  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 4 + sin(a1) * amp)
    a1 += 0.01;
  }
  endShape();

  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 2 + sin(a2) * amp)
    a2 += 0.05;
  }
  endShape();

  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 4 * 3 + sin(a3) * amp)
    a3 += 0.1;
  }
  endShape();


  stroke(255, 0, 0);
  a1 = a2 = a3 = 0;
  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 4 + cos(a1) * amp)
    a1 += 0.01;
  }
  endShape();

  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 2 + cos(a2) * amp)
    a2 += 0.05;
  }
  endShape();

  beginShape();
  for (let x = 0; x < width; x++) {
    vertex(x, height / 4 * 3 + cos(a3) * amp)
    a3 += 0.1;
  }
  endShape();

  noLoop();
}
