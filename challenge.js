// Start with your code from LinkedList challenge.
const LinkedList = require("./LinkedList");

class Queue {

  constructor() {
    this.queue = new LinkedList();
  }

  add(number) {                       ///3
    this.queue.add(number);           /// add 3
  }
  
  remove() {
   if(this.queue.box.length===0){
    return -1
   }else{
    return this.queue.box.shift();
   }

  }
}

const queue = new Queue()

queue.add(3)
queue.add(5)
console.log(queue.remove())
// => 3

queue.add(2)
queue.add(7)
console.log(queue.remove())
// => 5

console.log(queue.remove())
// => 2

console.log(queue.remove())
// => 7

console.log(queue.remove())
// => -1

module.exports = Queue

