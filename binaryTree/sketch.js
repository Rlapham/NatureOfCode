var canvasWidth = 720;
var canvasHeight = 480;
var backCol = 20; 
var count = 100; 

var tree;
var node;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backCol);
  colorMode(RGB, 100);
  tree = new Tree();
  node = new Node(); 
  for (var i = 0; i < 40; i++) {
    tree.addValue(floor(random(0, 100)));
  }
  console.log("test"); 


}

function draw(){
  background(backCol);
  // console.log(tree.search(42)); 
  //   console.log("test"); 


  push();
  translate(0, height/2);

  push();
  // translate(width/2, height/2);
  // translate(mouseX, mouseY); 
  tree.traverse();
  pop();


  push();
  translate(width, +30);
  rotate(PI);
  // translate(mouseX, mouseY); 
  tree.traverse();
  pop(); 

  push();
  translate(width, +30);
  translate(-100, 0);
  rotate(PI);
  // translate(mouseX, mouseY); 
  tree.traverse();
  pop(); 


  push();
  // translate(width, +30);
  translate(100, 0);
  // rotate(PI/4);
  // translate(mouseX, mouseY); 
  tree.traverse();
  pop(); 


  // tree.traverse();
  //  push();
  // translate(40, 30); 
  // tree.traverse();
  // pop(); 

  //  tree.traverse();
  //  push();
  // translate(40, 30); 
  // tree.traverse();
  // pop(); 
  pop();
 
  // background(backCol);
  // for (var i = 0; i < 20; i++) {
//   if (count == 100){
//   var n = new Node(floor(random(0, 100)), 100, 100);
//   if (this.root == null) {
//     tree.root = n;
//     tree.root.x = width / 2;
//     tree.root.y = 16;
//   } else {
//     tree.root.addNode(n);
//   }
// }



//   console.log(tree);
//   tree.traverse();

    // tree.addValue(floor(random(0, 100), mouseX, 40));
  // }

  if (count == 100){
    count = 0;

  }

}


function mouseClicked() {
    tree.addValue(floor(random(0, 100)));
  }

function mousePressed() {
  // for (Bob b : bobs) {
    node.clicked(mouseX, mouseY);
  // }
}

function mouseReleased() {
  // for (Bob b : bobs) {
    node.stopDragging();
  // }
}

