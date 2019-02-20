/*
 * example from p5 website
 * https://p5js.org/examples/sound-mic-input.html
*/

let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(255);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  noStroke();

  // Draw an ellipse with size based on volume
  fill(vol * 255);
  let r1 = map(vol, 0, 1, height/3, 30);
  ellipse(width/3, height/2, r1);

  fill(255, 0, 0);
  let r2 = map(vol, 0, 1, 30, height/3);
  ellipse(width/3*2, height/2, r2);
}
