/*

   Braeden Sowinski

--- Knights Cypher ---

  This takes a word and
  simply encrypts it by
  taking the current
  position of a letter
  in the map labeld "a",
  and uses the move of
  a knight from chess
  to determine the
  encrypted letter.

----------------------
*/

// Map of Alphabet (2x13)
let a = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f'],
  ['g', 'h'],
  ['i', 'j'],
  ['k', 'l'],
  ['m', 'n'],
  ['o', 'p'],
  ['q', 'r'],
  ['s', 't'],
  ['u', 'v'],
  ['w', 'x'],
  ['y', 'z']
];

// This function takes a characted and returns pos in "a" map
function getPos(char) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] === char) return [i, j];
    }
  }
}

// This function takes list of char positions and applies the
// Chess Knigts move to determine the new char position
function shift(map, dir) {
  let newMap = [];
  // Shift Each Char Pos
  if (dir == 1) {
    for (let i = 0; i < map.length; i++) {
      let newVal0 = map[i][0]+=2;
      let newVal1 = 0;
      if (newVal0 > 12) newVal0-=13;
      if (map[i][1] == 0) newVal1 = 1;
      newMap.push([newVal0, newVal1]);
    }
    return newMap;
  } else {
    for (let i = 0; i < map.length; i++) {
      let newVal0 = map[i][0]-=2;
      let newVal1 = 0;
      if (newVal0 < 0) newVal0+=13;
      if (map[i][1] == 0) newVal1 = 1;
      newMap.push([newVal0, newVal1]);
    }
    return newMap;
  }
}

// Returns the Char from a given position in the "a" map
function getChar(pos) {return a[pos[0]][pos[1]];}

// Main funtion for Handling the different functions for encrypting
function encrypt(word) {
  let indexed = [];
  // Get Each Char Pos
  for (let i = 0; i < word.length; i++) {
    indexed.push(getPos(word[i]));
  }

  let newMap = shift(indexed, 1);
  
  let encrypt = "";
  for (let j = 0; j < newMap.length; j++) {
     encrypt += getChar(newMap[j]);
  }
  return encrypt;
}

function decrypt(word) {
  let indexed = [];
  // Get each Char Pos
  for (let i = 0; i < word.length; i++) {
    indexed.push(getPos(word[i]))
  }

  let newMap = shift(indexed, 0);

  let decrypt = ""
  for (let j = 0; j < newMap.length; j++) {
    decrypt += getChar(newMap[j]);
  }
  return decrypt;
}

console.log(encrypt("hello".toLowerCase()));
console.log(decrypt("kjoot".toLowerCase()));