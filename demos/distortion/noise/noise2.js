let button;
let running = false;

let xoff, yoff;;
let xstep = 0.01;
let ystep = 0.01;

let yinit = 0;
let xinit = 0;

function setup() {
  createCanvas(windowHeight / 2, windowHeight / 2);
  pixelDensity(1);

  button = createButton('run / pause');
  button.mousePressed(runSketch);
  button.position(20, 20);

  noise2D();
}

function draw() {
  if (!running) {
    return;
  } else {
    noise2D();
  }
}

function noise2D() {
  loadPixels();

  yoff = yinit;
  for (let y = 0; y < height; y++) {
    xoff = xinit;
    for (let x = 0; x < width; x++) {
      let index = (y * width + x) * 4;
      let col = noise(xoff, yoff) * 255;
      pixels[index + 0] = col;
      pixels[index + 1] = col;
      pixels[index + 2] = col;
      pixels[index + 3] = 255;
      xoff += xstep;
    }
    yoff += ystep;
  }
  updatePixels();

  xinit += 0.02;
  yinit += 0.01;
}

function runSketch() {
  running = !running;
}
