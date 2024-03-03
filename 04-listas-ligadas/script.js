function LinkedList() {
  let Node = function(element) {
    this.element = element
    this.next = null
  }

  let length = 0
  let head = null

  this.append = function(element) {
    // Adiciona um elemento no final da lista
    // Dá pra ter uma ideia de como o método push de um array funciona
    let node = new Node(element)
    let current

    if(head === null) {
      head = node
    } else {
      current = head

      while(current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }

  this.insert = function(position, element) {
    // Adiciona um elemento em uma posição específica
    if(position >= 0 && position <= length) {
      let node = new Node(element)
      let current = head
      let previous
      let index = 0

      if(position === 0) {
        node.next = current
        head = node
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }

      length++

      return true
    } else {
      return false
    }
  }

  this.removeAt = function(position) {
    // Remove um elemento de uma posição específica
    if(position > - 1 && (position < length)) { // verifica se a posição é válida
      let current = head
      let previous
      let index = 0

      if(position === 0) {
        head = current.next
      } else {
        while(index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }

      length--

      return current.element
    } else {
      return null
    }
  }

  this.remove = function(element) {
    // Remove o elemento element

    let index = this.indexOf(element)
    return this.removeAt(index)
  }

  this.indexOf = function(element) {
    // Retorna a posição do elemento

    let current = head
    let index = 0

    while(current) {
      if(element === current.element) {
        return index
      }
      index++

      current = current.next
    }

    return -1
  }

  this.isEmpty = function() {
    // retorna se está vazia ou não a instância
    return length === 0
  }

  this.size = function() {
    // Retorna o tamanho da instância

    return length
  }

  this.getHead = function() {
    return head
  }

  this.toString = function() {
    // converte em string
    let current = head
    let string = ''

    while(current) {
      string += current.element + ' '
      current = current.next
    }

    return string
  }

  this.print = function() {
    // Imprime no console

    console.log(this.toString())
  }
}

let ll = new LinkedList()

ll.append('João')
ll.append('José')
ll.append('Maria')

ll.print()

// ll.removeAt(1)
// ll.print()

ll.insert(0, 'Carlos')
ll.print()

ll.insert(2, 'Ana')
ll.print()

console.log(ll.indexOf('José'))
console.log(ll.indexOf('Carlos'))

ll.remove('Carlos')
ll.print()