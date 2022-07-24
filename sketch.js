let angle;

let angleVelocity = 0;
let angleAcceleration = 0;
let bob;
let len;
let origin;

let gravity = 0.001;

function setup() {
  createCanvas(600, 400);
  origin = createVector(300, 0);
  angle = PI / 4;
  bob = createVector();
  len = 300;
}

function draw() {
  background(0);

  let force = gravity * sin(angle);
  let angleAcceleration = -1 * force;
  angleVelocity += angleAcceleration;
  angle += angleVelocity;

  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
