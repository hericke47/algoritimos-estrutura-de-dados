let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']

for (let index = 0; index < daysOfWeek.length; index++) {
  // console.log(daysOfWeek[index])
}

// soma dos anteriores dá o numero posterior
let fibonacci = []

fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for (let index = 3; index < 20; index++) {
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2]
}

console.log(fibonacci)