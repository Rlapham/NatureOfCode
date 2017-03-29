function Node(val, x, y) {
  colorMode(RGB, 100);

  this.value = val;
  this.size = val/2; 
  this.col = (map(val, 0, 100, 0, 255)); 
  this.col2 = (80, 22, 32);
  this.colT = map(val, 0, 100, 255, 0); 
  this.left = null;
  this.right = null;
  this.distance = 2;
  this.x = x;
  this.y = y;
  this.velocity;
  this.acceleration;
  this.mass = 8;
   // Arbitrary damping to simulate friction / drag 
  this.damping = 0.95;

    // For mouse interaction
  this.dragOffset;
  this.dragging = false;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  colorMode(RGB, 100);
  if (this.left != null) {
    this.left.visit(this);
  }
  // console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  // text(this.value, this.x, this.y);
  stroke(this.col, 100);
  line(parent.x, parent.y, this.x, this.y);
  noStroke();
  fill(this.col);
  if (this.value > 20){
  ellipse(this.x, this.y, this.size, this.size);
} else {
   ellipse(this.x, this.y, map(this.size, 0, 100, 0, 300) , map(this.size, 0, 100, 0, 300) );
}

Node.prototype.visit2 = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  // console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(12);
  // text(this.value, this.x, this.y);
  stroke(255, 100);
  line(parent.x, parent.y, this.x, this.y);
  noStroke();
  fill(0, 255, 255);
  //display
  // if (this.dragging) {
  //     fill(255);
  //     ellipse(mouseX, mouseY, this.mass*2, this.mass*2);
  // }
  if (this.value > 20){
  ellipse(this.x, this.y, this.size, this.size);
} else {
   ellipse(this.x, this.y, map(this.size, 0, 100, 0, 300) , map(this.size, 0, 100, 0, 300) );
}
}




  // ellipse(this.x, this.y, 30, 30);
  noStroke();
  if (this.value < 60 && this.value > 40 ){
    fill(200);
  } else{
  fill(this.colT);
  }
  text(this.value, this.x, this.y+4);
  if (this.right != null) {
    this.right.visit(this);
  }
}

Node.prototype.addNode = function(n, x, y) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x + (canvasWidth/Math.pow(2,n.distance)) + 5;
      this.left.y =  this.y +(canvasHeight/12) + 5;
    } else {
      n.distance++;
      this.left.addNode(n)
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x - (canvasWidth/Math.pow(2, n.distance)) - 5;
      this.right.y = this.y + (canvasHeight/20) + 5;
    } else {
      n.distance++;
      this.right.addNode(n);
    }
  }
}

  // Standard Euler integration
Node.prototype.update = function() { 
    this.velocity.add(this.acceleration);
    this.velocity.mult(this.damping);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

    // Newton's law: F = M * A
Node.prototype.applyForce = function(force) {
    this.f = force.get();
    this.f.div(this.mass);
    this.acceleration.add(f);
  }
Node.prototype.clicked = function(mx, my) {
    var d = dist(mx, my, this.x, this.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.x-mx;
      this.dragOffset.y = this.y-my;
    }
  }

Node.prototype.stopDragging = function() {
    this.dragging = false;
  }

Node.prototype.drag = function (mx, my) {
    if (this.dragging) {
      this.x = mx + this.dragOffset.x;
      this.y = my + this.dragOffset.y;
    }
  }

