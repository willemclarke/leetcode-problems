// J = stones that === jewels
// S = stones that I currently have
// Each character in 'S' is a type of stone
// 'a' is different from 'A'
// How many of the stones I have are jewels?

const jewels = ["a", "A"]
const stones = ["a","A", "A", "b", "b", "b", "b"]

const checkMatchingCharacters = stones.filter(character => jewels.includes(character));
const summedCharacters = checkMatchingCharacters.length
           
console.log(checkMatchingCharacters)
console.log(summedCharacters)

//Output:
// [ 'a', 'A', 'A' ]
// 3