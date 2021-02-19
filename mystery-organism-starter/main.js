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
const p2 = mockUpStrand();
const p3 = mockUpStrand();


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
    compareDNA(obj) {
      //let identical = this.dna.reduce( (acc, val, index) => val === obj.dna[index] ? acc += 1 : acc , 0)
      let identical = 0
      this.dna.forEach( (element, index) => element === obj.dna[index] ? identical++ : identical += 0)
      let percentage = Math.floor(identical / this.dna.length * 100)
      return `specimen #1 and specimen #2 have ${percentage}% DNA in common.`
    },

  }
}

const pAequor1 = pAequorFactory(1, p1)
const pAequor2 = pAequorFactory(1, p2)
const pAequor3 = pAequorFactory(1, p3)

//const mutated = pAequor1.compareDNA(pAequor2)

//console.log(pAequor1.dna)
//console.log(pAequor2.dna)
//console.log(pAequor3.dna)
console.log(pAequor1.compareDNA(pAequor2))





