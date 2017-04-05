// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// DNA is an array of vectors

class DNA {

  // The genetic sequence
  Float[] genes;

  // The maximum strength of the forces
  float maxforce = 0.1;

  // Constructor (makes a DNA of random PVectors)
  // - random  angles
  DNA() {
    genes = new Float[branches];
    for (int i = 0; i < genes.length; i++) {
      genes[i] = random(0, 1);
    }
  }
  
    // Constructor #2, creates the instance based on an existing array
  DNA(Float[] newgenes) {
    // We could make a copy if necessary
    // genes = (PVector []) newgenes.clone();
    genes = newgenes;
  }

    // Based on a mutation probability, picks a new random Vector
  // - make random angles for next branch 
  void mutate(float m) {
    for (int i = 0; i < genes.length; i++) {
      if (random(1) < m) {
        genes[i] = random(0, 1);
      }
    }
  }
  
    // CROSSOVER
  // Creates new DNA sequence from two (this & and a partner)
  DNA crossover(DNA partner) {
    Float[] child = new Float[genes.length];
    // Pick a midpoint
    int crossover = int(random(genes.length));
    // Take "half" from one and "half" from the other
    for (int i = 0; i < genes.length; i++) {
      if (i > crossover) child[i] = genes[i];
      else               child[i] = partner.genes[i];
    }    
    DNA newgenes = new DNA(child);
    return newgenes;
  }

}