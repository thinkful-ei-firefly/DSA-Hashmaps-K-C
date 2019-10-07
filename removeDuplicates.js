const HashMap = require('./hashmap')

function removeDuplicates(str){
  const charHash = new HashMap(16)
  // iterate through string keep add letters to hashmap
  // check if letter is in hashmap if it is skip it
  let newString = ''
  for(let i=0; i<str.length; i++){
    // if letter is not in map, add letter to the new string
    try{
      charHash.get(str[i])
    } catch {
      charHash.set(str[i])
      newString += str[i]
    }
   
  }
  return newString
}

console.log(removeDuplicates('google boogle poodle hello zq')) 