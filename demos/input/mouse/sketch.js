// NOC 3.3 - simple harmonica motion
let button;
let running = false;

let amplitude = 5;
let a = 0; // framecount for one period
let r = 6; // radius of the ndoe
let num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  num = Math.round(width / r) - 1;

  button = createButton('run / pause');
  button.mousePressed(runSketch);
  button.position(20, 20);

  simpleHarmonicaMotion();
}

function draw() {
  if (!running) {
    return;
  } else {
    simpleHarmonicaMotion();
  }
}

function mouseMoved() {
  amplitude += 0.5;
}

function simpleHarmonicaMotion() {
  background(255);
  translate(width / 2, 0);

  a += 0.005;

  fill(0);
  for (let i = 1; i < num; i++) {
    let interval = i * r;
    let x = amplitude * sin(a * i);

    ellipse(x, interval, r, r);
    line(0, interval, x, interval);
  }

  if (amplitude > 5) {
    amplitude *= 0.99;
  }
}

function runSketch() {
  running = !running;
}
