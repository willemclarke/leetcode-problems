// First time
function attendance(str) {
  if (str.split("A").length = 1 && str.indexOf("LLL") === -1)   {
    return true
  } else {
    return false
  }
}
console.log(attendance("PPALLP"))
console.log(attendance("PPALLL"))

// refactored code
const test = (str) => {
  return str.split("A").length = 1 && str.indexOf("LLL") === -1
}

console.log(attendance("PPALLP"))
console.log(attendance("PPALLL"))