var movers = [];
var colorStore = []; 
var attractor;
var movNUM = 20;

//regression
var k = 1;
var training
// var fillCol;
 


function setup() {
  createCanvas(windowWidth, windowHeight); 
  for (var i = 0; i < movNUM; i++) { 
    // var tempCol = color(random(0, 255),random(0, 255),random(0, 255));
    var tempR = int(random(0, 3)); 
    console.log(tempR);
    if (tempR == 0) tempCol = color(255, 255, 0); 
    if (tempR == 1) tempCol = color(0, 255, 255); 
    if (tempR == 2) tempCol = color(255, 0, 255); 
    movers.push(new Mover(random(0.1, 2), random(width), random(height), tempCol));
  }
  attractor = new Attractor(width/2, height/2);
  for (var i = 0; i < movers.length; i++){
      colorStore[i] =  movers[i].baseColor; 
  }
}

function draw() {
  background(1);
  blendMode(DIFFERENCE);


//   //training 
//   training = [{
//     x: width/2,
//     y: height/2, 
//     color: color(255, 0, 0)
//   },
// ] 

// for (var w = 0; w < width-1; w+=10) {
//   for (var h = 0; h < height-1; h+=10) {
//     stroke(pointVal);
//     point(w, h);

//   }
// }
// updatePixels();


for (var i = 0; i < movers.length; i++){
  var moverD = dist(movers[i].position.x, movers[i].position.y, attractor.position.x, attractor.position.y);
  moverD = map(moverD, 0, width, .1, 0);

  movers[i].baseColor = lerpColor(movers[i].baseColor, color(255, 255, 255), moverD);
  console.log(moverD);
  // if (moverD < .25){
  // movers[i].baseColor = colorStore[i];
//}
} 

for (var i = 0; i < movers.length; i++){
  var moverD = dist(movers[i].position.x, movers[i].position.y, attractor.position.x, attractor.position.y);
  moverD = map(moverD, 0, width, 0, .2);

  movers[i].baseColor = lerpColor(movers[i].baseColor, colorStore[i], moverD);
  console.log(moverD);
  // if (moverD < .25){
  // movers[i].baseColor = colorStore[i];
//}
} 


    
    // //weights 
    // var sumWeights = 0;
    //   var pointT = training[0];

    //   var oD = dist(w, h, x, y);
    //   pD = map(pD, 0, height, 0, 1); 
    //   oD = map(pD, 0, height, 0, 1);

    // var sum = 0;
    //   var trainCol = color(pointT.color.levels); 
    //    //translate sumweights to lerp val
    //   var pointVal = lerpColor(fillCol, trainCol, pD);
  




  // for (var i = 0; i < movers.length; i++){
  //   console.log(movers[i].baseColor.levels);

  // }

  // attractor.move(); 


  for (var i = 0; i < movers.length; i++) {
    var force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
    attractor.display();

    //regression 
  // KNN regression! K is just everything weighted according to distance
  

// blendMode(MULTIPLY);

     //}
 } // draw 


