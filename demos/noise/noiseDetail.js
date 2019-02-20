let noiseVal;
let noiseScale = 0.02;
const num = 5;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight / 5 * 2);
  r = width / 5;
}

function draw() {

  noFill();
  strokeWeight(0.2);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width / num; x++) {
      noiseDetail(2, 0.2);
      noiseVal = noise(x * noiseScale, y / 2 * noiseScale);
      stroke(noiseVal * 255);
      point(x, y / 2);

      noiseDetail(4, 0.35);
      noiseVal = noise((x + width / num) * noiseScale, y / 2 * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num, y / 2);

      noiseDetail(6, 0.5);
      noiseVal = noise((x + width / num * 2) * noiseScale, y / 2 * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 2, y / 2);

      noiseDetail(8, 0.65);
      noiseVal = noise((x + width / num * 3) * noiseScale, y / 2 * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 3, y / 2);

      noiseDetail(10, 0.8);
      noiseVal = noise((x + width / num * 4) * noiseScale, y / 2 * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 4, y / 2);

      //

      noiseDetail(2, 0.5);
      noiseVal = noise(x * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x, y);

      noiseDetail(4, 0.5);
      noiseVal = noise((x + width / num) * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num, y);

      noiseDetail(6, 0.5);
      noiseVal = noise((x + width / num * 2) * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 2, y);

      noiseDetail(8, 0.5);
      noiseVal = noise((x + width / num * 3) * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 3, y);

      noiseDetail(10, 0.5);
      noiseVal = noise((x + width / num * 4) * noiseScale, y * noiseScale);
      stroke(noiseVal * 255);
      point(x + width / num * 4, y);
    }
  }


  textSize(15);
  textAlign(LEFT);
  fill(220, 0, 0);
  noStroke();
  translate(10, height / 2 - 30);
  text('noiseDetail(2, 0.2)', 0, 0, width / 5, 50);
  text('(4, 0.35)', width / 5, 0, width / 5, 50);
  text('(6, 0.5)', width / 5 * 2, 0, width / 5, 50);
  text('(8, 0.65)', width / 5 * 3, 0, width / 5, 50);
  text('(10, 0.8)', width / 5 * 4, 0, width / 5, 50);

  fill(255);
  translate(0, height / 2);
  text('(2, 0.5)', 0, 0, width / 5, 50);
  text('(4, 0.5)', width / 5, 0, width / 5, 50);
  text('(6, 0.5)', width / 5 * 2, 0, width / 5, 50);
  text('(8, 0.5)', width / 5 * 3, 0, width / 5, 50);
  text('(10, 0.5)', width / 5 * 4, 0, width / 5, 50);

  noLoop();
}
