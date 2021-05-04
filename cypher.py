'''

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
'''

a = [
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
]

# This function takes a characted and returns pos in "a" map
def getPos(char):
  for i in range(len(a)):
    for j in range(len(a[i])):
      if a[i][j] == char:
        return [i, j]

# This function takes list of char positions and applies the
# Chess Knigts move to determine the new char position
def shift(MAP, dir):
  newMap = []
  # Shift Each Char Pos
  if dir == 1:
    for i in range(len(MAP)):
      newVal0 = MAP[i][0] + 2
      newVal1 = 0
      if newVal0 > 12: newVal0 -= 13
      if MAP[i][1] == 0: newVal1 = 1
      newMap.append([newVal0, newVal1])
    return newMap
  else:
    for i in range(len(MAP)):
      newVal0 = MAP[i][0] - 2
      newVal1 = 0
      if newVal0 < 0: newVal0 += 13
      if MAP[i][1] == 0: newVal1 = 1
      newMap.append([newVal0, newVal1])
    return newMap

def getChar(pos): return a[pos[0]][pos[1]]

def encrypt(word):
  indexed = []
  # Get Each Char Pos
  for i in range(len(word)): indexed.append(getPos(word[i]))
  newMap = shift(indexed, 1)
  encrypt = ""
  for j in range(len(newMap)): encrypt += getChar(newMap[j])
  return encrypt

def decrypt(word):
  indexed = []
  for i in range(len(word)): indexed.append(getPos(word[i]))
  newMap = shift(indexed, 0)
  decrypt = ""
  for j in range(len(newMap)): decrypt += getChar(newMap[j])
  return decrypt

print(encrypt("hello".lower()))
print(decrypt("kjoot".lower()))