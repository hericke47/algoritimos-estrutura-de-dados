function Queue() {
  let items = []

  this.enqueue = function(element) {
    // adicionar novo item
    items.push(element)
  }

  this.dequeue = function() {
    // remove um item

    return items.shift()
  }

  this.front = function() {
    // retorna o primeiro elemento da fila

    return items[0]
  }

  this.isEmpty = function() {
    // verifica se a fila está vazio

    return items.length === 0
  }

  this.size = function() {
    // retorna o tamanho da fila

    return items.length
  }

  this.print = function() {
    // imprimir a fila no console

    console.log(items.toString())
  }
}

function hotPotato(nameList, numRounds) {
  let queue = new Queue()

  for (let index = 0; index < nameList.length; index++) { // adiciona nomes na fila
    queue.enqueue(nameList[index])
  }

  let eliminated = ''

  while(queue.size() > 1) {
    for (let index = 0; index < numRounds; index++) {
      queue.enqueue(queue.dequeue()) // remove do inicio e adiciona no final
    }

    eliminated = queue.dequeue()

    console.log(eliminated + ' Foi eleminado pelo jogo da batata quente')
  }

  return queue.dequeue()
}

let names = ['Joao', 'Jose', 'Maria', 'Lucas', 'Ana']

let winner = hotPotato(names, 10)
console.log("O vencedor é: ", winner)