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

const p1 = mockUpStrand();

const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let currentBase = this.dna[Math.floor(Math.random() * this.dna.length)]
      let newBase = returnRandBase();
      
        while (currentBase === newBase) {
          currentBase = newBase

          if (currentBase !== newBase) {
            currentBase = newBase
            break;
          }
        }

      return this.dna
    },
    
  }
}

const pAequor1 = pAequorFactory(1, p1)
const mutated = pAequor1.mutate()

console.log(mutated)





