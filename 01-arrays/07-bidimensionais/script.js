let avgTempWeek = []

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 12]
let avgTempWeek2 = [42, 28.2, 12, 32, 19.5, 17, 7]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

// console.log(avgTempWeek[0][4])

for (let index = 0; index < avgTempWeek.length; index++) {
  for (let j = 0; j < avgTempWeek[index].length; j++) {
    console.log(avgTempWeek[index][j]);
  }
}