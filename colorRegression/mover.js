var Mover = function(m, x, y, c) {
  this.position = createVector(x, y);
  this.mass = m;

  this.baseColor = c;
  // this.newColor = c;

  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0;

  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  };

  this.update = function () {

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);

    this.aAcceleration = this.acceleration.x / 10.0;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;

    this.acceleration.mult(0);
  };

  this.display = function () {
    stroke(this.baseColor);
    strokeWeight(3); 
    fill(this.baseColor);
    push();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    ellipse(0, 0, this.mass*16, this.mass*16);
    pop();
  };
};
