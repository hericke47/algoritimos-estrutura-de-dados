let month = []

let firstWeeks = []
let lastWeeks = []

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 12]
let avgTempWeek2 = [42, 28.2, 12, 32, 19.5, 17, 7]
let avgTempWeek3 = [33, 12.2, 33, 44, 23.4, 41.6, 1]
let avgTempWeek4 = [11, 33.2, 77, 22, 5.5, 3, 2]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

// console.log(month[1][1][4])

for (let x = 0; x < month.length; x++) {
  for (let y = 0; y < month[x].length; y++) {
    for (let z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z])
    }
  }
}