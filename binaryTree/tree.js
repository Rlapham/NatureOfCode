function Tree() {
  this.root = null;
}

Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.traverse2 = function() {
  this.root.visit2(this.root);
}

Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
    this.root.x = width / 2;
    this.root.y = 16;
  } else {
    this.root.addNode(n);
  }
}

// Tree.prototype.applyForce = function(force) {
//     this.applyForce(force);
// }

//     // Newton's law: F = M * A
// Node.prototype.applyForce = function(force) {
//     this.f = force.get();
//     this.f.div(this.mass);
//     this.acceleration.add(f);
//   }