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

// remove ultimo elemento
numbers.pop()

// remove primeiro elemento
numbers.shift()

// corta uma parte do array, remove a partir do indice 3, 4 elementos
numbers.splice(3, 4)

// a partir do indice 3 remove 0 itens e adiciona o resto
numbers.splice(3, 0, 1, 3, 4, 5)

console.log(numbers)