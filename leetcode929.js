function processingEmail(email) {
  const input = email.split('@');
  const localName = input[0];
  const domainName = input[1];

  // removing fullstops:
  const removedFullStops = localName.split('.').join('')
  
  // removing +onwards:
  const indexOfPlus = removedFullStops.indexOf('+');
  const plusOnwardsRemoved = removedFullStops.substring(0, indexOfPlus)
  
  // appending email:
  const append = plusOnwardsRemoved.concat('@', domainName)
  return append
}

// Producing output:
const emailInput = ['testemail+david@lee.tcode.com', 'test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com']
const mappingInput = emailInput.map(processingEmail)
const answer = mappingInput.filter((email, index, originalArray)  => originalArray.indexOf(email) === index)
const answerCountExplanation = answer.length+":" + " The following addresses actually recieved mail:"
console.log(answerCountExplanation)
console.log(answer)

//Output: 
// 2: The following addresses actually recieved mail:
// [ 'testemail@lee.tcode.com', 'testemail@leetcode.com' ]










