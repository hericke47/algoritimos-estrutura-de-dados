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

let fila = new Queue()

fila.enqueue('Carlos')
fila.enqueue('Ana')
fila.enqueue('Lucas')

console.log(fila.front())

fila.print()

fila.dequeue()

console.log(fila.front())

fila.print()

fila.dequeue()

fila.print()