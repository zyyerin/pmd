let cols;
let rows;
let current = [];
let previous = [];

let damping = 0.999;

let t = 0;
let t2 = 1;

let img;

function setup() {
  createCanvas(600, 600);

  background(0);

  cols = width;
  rows = height;
  current = [[cols],[rows]];
  previous = [[cols],[rows]];

  img = loadImage('img_cat.png');
  img.loadPixels();
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++ ) {
      let loc = (x + y*width) * 4;
      let r, g, b;
      r = img.pixels[loc + 0];
      g = img.pixels[loc + 1];
      b = img.pixels[loc + 2];
      current[x][y] = (r+g+b)*0.33;
    }
  }
}



function draw() {

  for (let i=1; i<cols-1; i++) {
    for (let j=1; j<rows-1; j++) {

      current[i][j] = (
        (previous[i-1][j] +
        previous[i+1][j] +
        previous[i][j-1] +
        previous[i][j+1]) * 0.5 -
        current[i][j]) % 255;

      current[i][j] *= damping;
      let index = (i + j * cols) * 4;

      pixels[index] = current[i][j]*255;
      pixels[index+1] = current[i][j]*255;
      pixels[index+2] = current[i][j]*255;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
  let[][] temp = previous;
  previous = current;
  current = temp;
}
