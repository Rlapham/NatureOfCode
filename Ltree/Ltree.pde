// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Smart Rockets w/ Genetic Algorithms

// Each Rocket's DNA is an array of PVectors
// Each PVector acts as a force for each frame of animation
// Imagine an booster on the end of the rocket that can point in any direction
// and fire at any strength every frame

// The Rocket's fitness is a function of how close it gets to the target as well as how fast it gets there

// This example is inspired by Jer Thorp's Smart Rockets
// http://www.blprnt.com/smartrockets/

int branches;  // How long should each generation live

Population population;  // Population

int lifeCounter;          // Timer for cycle of generation

PVector target;        // Target position

float theta = .5; 

float targetTheta = .9; 

float tempAngle; 

PVector rot = new PVector(); 
PVector trot = new PVector(1.1, 0, 0); 

void setup() {
  size(1080, 720, P3D);
  // The number of cycles we will allow a generation to live
  branches = 100;

  // Initialize variables
  lifeCounter = 0;

  // Create a population with a mutation rate, and population max
  float mutationRate = 0.01;
  population = new Population(mutationRate, 1);


}

void draw() {
  background(255);
  
  //rotating
  rot.lerp(trot, 0.01); 
  
  if (mousePressed){
   trot.z += (mouseX - pmouseX) * 0.01;  
   trot.x += (mouseX - pmouseX) * 0.01;  
   trot.x = constrain(trot.x, 0, PI/2);  
  }
  
  translate(width/2, height/2); 
  rotateX(rot.x); 
  rotateZ(rot.z); 
  translate(-width/2, -height/2); 
  //end rotate

  pushMatrix();
  translate(width/2, height/1.5);
  // If the generation hasn't ended yet
  if (lifeCounter < branches) {
    population.live();
    lifeCounter++;
    // Otherwise a new generation
  } 
  else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }
  popMatrix();
   
  pushMatrix(); 
  translate(-width/2, 0);
  // Display some info
  fill(0);
  text("Generation #: " + population.getGenerations(), width - 40, height/1.3);
  text("Cycles left: " + (branches-lifeCounter), width - 40, height/1.3 - 30);
  text("Angle: " + (tempAngle), width - 40, height/1.3 + 30);
  popMatrix();
}