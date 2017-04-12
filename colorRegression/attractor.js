var Attractor = function(x, y) {
  this.mass = 60;
  this.G = 1;
  this.position = createVector(x, y);
  this.xspeed = 1;
  this.yspeed = .8;

  this.calculateAttraction = function(m) {
    // Calculate direction of force
    var force = p5.Vector.sub(this.position, m.position);
    // Distance between objects
    var distance = force.mag();
    // Limiting the distance to eliminate "extreme" results for very close or very far objects
    distance = constrain(distance, 5, 25);
    // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    force.normalize();
    // Calculate gravitional force magnitude
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    // Get force vector --> magnitude * direction
    force.mult(strength);
    return force;
  };

    this.move = function() {
      this.position.x = this.position.x + this.xspeed;
      this.position.y = this.position.y + this.yspeed;

    if (this.position.x > (width/2)+50 || this.position.x < (width/2)-50)  {
      this.xspeed = -this.xspeed;
    }

    if (this.position.y > (height/2) +50|| this.position.y < (height/2) -50) {
      this.yspeed = -this.yspeed;
    }
  };

  this.display = function() {
    strokeWeight(2);
    noStroke();
    fill(255, 255, 255);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
  };
};
