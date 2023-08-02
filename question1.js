class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }

  show() {
    push();
    stroke(10);
    fill(220);
    circle(this.x, this.y, this.r);
    pop();
  }
}

let bubble1 = new Bubble(200, 200, 50);
let bubble2 = new Bubble(200, 200, 50);
let bubble3 = new Bubble(200, 200, 50);
let bubble4 = new Bubble(200, 200, 50);
let bubble5 = new Bubble(200, 200, 50);

function setup() {
  createCanvas(960, 540);
}

function draw() {
  background(220);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
  bubble3.move();
  bubble3.show();
  bubble4.move();
  bubble4.show();
  bubble5.move();
  bubble5.show();
}
