// obtains human input to be translated to Whale words
let input = window.prompt("Enter any phrase")

const vowels = ['a', 'e', 'i', 'o', 'u']

let resultArray = []

// compares input and vowels and take only the vowels
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++){
        if (input[inputIndex] === vowels[vowelsIndex]) { 
                if (input[inputIndex] === 'e') {
                    resultArray.push('ee') // doubles 'e'
                } else if (input[inputIndex] === 'u') {
                    resultArray.push('uu') // doubles 'u'
                } else {
                    resultArray.push(input[inputIndex])
                }
            
        }
    }
}

document.write(resultArray.join('').toUpperCase())
// should print all vowels and double the e's and u's