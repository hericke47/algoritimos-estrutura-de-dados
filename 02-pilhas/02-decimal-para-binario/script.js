function dec2Bin(decNumber) {
  let restStack = []
  let rest
  let binaryString = ''

  while(decNumber > 0) {
    rest = Math.floor(decNumber % 2)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / 2)
  }

  while(restStack.length > 0) {
    binaryString += restStack.pop().toString() // recebe o ultimo valor do array e retorna como string
  }

  return binaryString
}

console.log(dec2Bin(23))