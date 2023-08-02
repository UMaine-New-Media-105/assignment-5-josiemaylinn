function setup() {
  createCanvas(960, 540);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    push();
    stroke("black");
    fill("white");
    circle(this.x, this.y, this.r);
    push();
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
}

let bubbles = [];

function draw() {
  background(220);

  for (i = 0; i < 50; i++) {
    bubbles[i] = new Bubble(random(width), random(height), 50);

    bubbles[i].show();
    bubbles[i].move();
  }
}
