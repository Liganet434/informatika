let countCode = (letter) => {
  found = 0
  codeNum = 0
  while (codeNum < data.length) {
      if (data[codeNum].startsWith(letter)) {
        found ++
        //console.log(found)
      }
      codeNum++
  }
  return found
}

console.log(countCode("U"))

console.log(countCode("I"))

console.log(countCode("K"))
