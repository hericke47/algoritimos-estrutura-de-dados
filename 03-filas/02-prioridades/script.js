function PriorityQueue() {
  let items = []

  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority)
    let added = false

    for (let index = 0; index < items.length; index++) {
      if(queueElement.priority < items[index].priority) {
        items.splice(index, 0, queueElement)
        added = true
        break
      }
    }

    if(!added) {
      items.push(queueElement)
    }
  }

  this.dequeue = function() {
    return items.shift()
  }

  this.print = function() {
    for (let index = 0; index < items.length; index++) {
      console.log(items[index].element + ' ' + items[index].priority)
    }
  }
}

let pQueue = new PriorityQueue()
pQueue.enqueue('Carlos', 2)
pQueue.enqueue('Ana', 1)
pQueue.enqueue('Lucas', 1)

pQueue.print()