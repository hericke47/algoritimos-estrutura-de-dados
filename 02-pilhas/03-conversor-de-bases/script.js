function baseConverter(decNumber, base) {
  let restStack = []
  let rest
  let baseString = ''
  let digits = '0123456789ABCDEF'

  while(decNumber > 0) {
    rest = Math.floor(decNumber % base)
    restStack.push(rest)
    decNumber = Math.floor(decNumber / base)
  }

  while(restStack.length > 0) {
    baseString += digits[restStack.pop()]
  }

  return baseString
}

console.log(baseConverter(123, 16)) // Hexadecimal
console.log(baseConverter(123, 8)) // octal
console.log(baseConverter(123, 2)) // decimal