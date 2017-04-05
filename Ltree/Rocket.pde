// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Pathfinding w/ Genetic Algorithms

// Rocket class -- this is just like our Boid / Particle class
// the only difference is that it has DNA & fitness

class Rocket {

  // All of our physics stuff
  float Angle; 
  Float Size;


  // Fitness and DNA
  float fitness;
  DNA dna;
  
  // To count which force we're on in the genes
  int geneCounter = 0;
  
  //constructor
  Rocket(Float _angle, DNA dna_) {
    Angle = _angle;
    dna = dna_;
    Size = map(_angle, 0, 1, 60, 150); 
  }

  // Fitness function
  // fitness = one divided by distance squared
  void fitness() {
    ///dist between current angle and ideal angle
    float d = dist(Angle, Angle, targetTheta, targetTheta);
    fitness = d;
    println(fitness); 
  }

  // Run in relation to all the obstacles
  // If I'm stuck, don't bother updating or checking for intersection
  void run() {
      //applyForce(dna.genes[geneCounter]);
      //geneCounter = (geneCounter + 1) % dna.genes.length;
      //update();
      display(Size, Angle);
      tempAngle = Angle; 
  }



  //void update() {
  //  velocity.add(acceleration);
  //  position.add(velocity);
  //  acceleration.mult(0);
  //}

    void display(float len, float ang) {
  // Each branch will be 2/3rds the size of the previous one
  float sw = map(len,2,120,1,10);
  strokeWeight(sw);
  
  pushMatrix();
  line(0, 0, 0, -len); 
  //box(-len, -len, -len);
  // Move to the end of that line
   popMatrix(); 
   translate(0, -len); 
   rotateY(30); 
    
  len *= 0.66;
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (len > 2) {
    pushMatrix();    // Save the current state of transformation (i.e. where are we now)
    rotate(ang);   // Rotate by theta
    display(len, ang);       // Ok, now call myself to draw two new branches!!
    popMatrix();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    pushMatrix();
    rotate(-ang);
    display(len, ang);
    popMatrix();
  }
  }

  float getFitness() {
    return fitness;
  }

  DNA getDNA() {
    return dna;
  }

}