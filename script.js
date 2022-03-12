let x;
let y = 0;
let high = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
  fill(140, 0, 340);
  background(220);
  x = windowWidth / 6;
  c = windowWidth;
}

function draw() {
  if (high < c + 800) {
    fill(0, 151, 219);
    rect(y, 0, x, high);

    fill(128, 0, 115);
    rect(x * 1, 0, x, high - 70);

    fill(205, 0, 74);
    rect(x * 2, 0, x, high - 140);

    fill(243, 115, 0);
    rect(x * 3, 0, x, high - 210);

    fill(252, 175, 23);
    rect(x * 4, 0, x, high - 280);

    fill(143, 195, 31);
    rect(x * 5, 0, x, high - 350);

    high += 10;
  }
}
