const HashMap = require("./hashmapcopy");

function main() {
  let lor = new HashMap();
  lor.MAX_LOAD_RATIO = 0.5;
  lor.SIZE_RATIO = 3;

  lor.set("Hobbit", "Bilbo");
  lor.set("Hobbit", "Frodo");
  lor.set("Wizard", "Gandolf");
  lor.set("Human", "Aragon");
  lor.set("Elf", "Legolas");
  lor.set("Maiar", "The Necromancer");
  lor.set("Maiar", "Sauron");
  lor.set("RingBearer", "Gollum");
  lor.set("LadyOfLight", "Galadriel");
  lor.set("HalfElven", "Arwen");
  lor.set("Ent", "Treebeard");
  print(lor)
}

function print(map) {
  for (let i = 0; i < map.length; i++) {
    if(map._hashTable[i]){
      console.log(map._hashTable[i].value);
      if (map._hashTable[i].value.next !== null)
        console.log(map._hashTable[i].value.next);
    }
  }
}

main()

const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
//20, 10
//WhatDoesThisDo()

function palindrome(string) {
  // racecar rraacce
  let p = new Map();
  for (let i = 0; i < string.length; i++) {
    if (p.has(string[i])) {
      p.set(string[i], p.get(string[i]) + 1);
    } else {
      p.set(string[i], 1);
    }
  }
  let odd = false
  let ret = true
  p.forEach(char => {
    if (char % 2 === 1) {
      if (odd === true){
        ret = false
      }
      else odd = true;
    }
  });
  return ret;
}

//.console.log(palindrome("aqeryhgf"));

