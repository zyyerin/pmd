let button;
let running = false;

let img;
let margin = 5;
let offScale = 100;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  img = loadImage('cat.png'); // Load the image

  button = createButton('run / pause');
  button.mousePressed(runSketch);
  button.position(20, 20);
}

function draw() {
  if (!running) {
    return;
  } else {
    addNoise();
  }
}

function addNoise () {
  image(img, 0, 0, width, height);
  loadPixels();
  for (let y = margin; y < height - margin; y++) {
    for (let x = margin; x < width - margin; x++) {
      let index = (y * width + x) * 4;
      let coff = round(random(-offScale, offScale));
      pixels[index + 0] = pixels[index + 0 + coff];
      pixels[index + 1] = pixels[index + 1 + coff];
      pixels[index + 2] = pixels[index + 2 + coff];
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

function runSketch() {
  running = !running;
}
