// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



//factory function that creates a pAequor object
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr, //array of 15 DNA bases

    //method that mutates/changes the DNA array
    mutate() {
      //currentBase variable chooses a random element from the DNA array
      let currentBase = this.dna[Math.floor(Math.random() * this.dna.length)]

      //newBase variable generates a random element which will be assigned to currentBase element
      let newBase = returnRandBase();

      //currentBase and newBase should not be the same
      //if they are same, the loop will run newBase to generate another base/element
        while (currentBase === newBase) {
          currentBase = newBase

          if (currentBase !== newBase) {
            currentBase = newBase
            break;
          }
        }
        //returns the new version of the DNA array
      return this.dna
    },
    //compares the DNA array of a pAequor object to another then finds the identical element per index
    compareDNA(obj) {      
      //identical variable is the number of duplicates per index of both this.dna and obj.dna arrays
      let identical = 0
      this.dna.forEach( (element, index) => element === obj.dna[index] ? identical++ : identical += 0)

      //percentage variable, of course finds the percentage of duplicates both arrays
      let percentage = Math.floor(identical / this.dna.length * 100)

      return `specimen #1 and specimen #2 have ${percentage}% DNA in common.`
    },
    willLikelySurvive() {
      let cgDNA = []
      this.dna.forEach(value => value === 'C' || value === 'G' ? cgDNA.push(value) : null)
      //obtains 'C' or 'G' bases from this.dna array and if true, add to the cgDNA array
      
      let percentage = Math.floor(cgDNA.length / this.dna.length * 100)
      return percentage >= 60 ?  true : false //if this.dna contains at least 60% of 'C' or 'G' bases, return true
    },
    
  }
}
//function to create 30 pAequor species. this will only create one if willLikelySurvive() method is true

/* const create30Instances = () => {
  let pAequor30 = [];
  let n = 0;
  while (pAequor30.length < 30) {
    const newSpecies = pAequorFactory(n, mockUpStrand());
    n++;
    if (newSpecies.willLikelySurvive()) {
      pAequor30.push(newSpecies);
    }
  }
  return pAequor30;
} */

//console.log(create30Instances())



