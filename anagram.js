function anagrams(list){
  const map = new Map()
  // anagram if same count of same letters in a string
  for(let i=0; i<list.length; i++){
    let temp = list[i].split('').sort().join('')
    // if sorted string ! in map add to map
    if(!map.has(temp)){
      map.set(temp, [list[i]])
    }
    // else add original string to mapd object
    else{
      map.set(temp, [...map.get(temp), list[i]])
    }
  }
  const strArr = []
  map.forEach(str => {
    if(str){
      strArr.push(str)
    }
  })

  return strArr

}


console.log(anagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))