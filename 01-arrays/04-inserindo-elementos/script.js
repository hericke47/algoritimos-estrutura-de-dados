let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10
numbers[numbers.length] = 11

// fim do array
numbers.push((12))
numbers.push((13))
numbers.push((14))
numbers.push((15))
numbers.push((16))

// início do array
numbers.unshift(-1)

console.log(numbers)