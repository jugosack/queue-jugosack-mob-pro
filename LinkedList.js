class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
  
  class LinkedList {
    constructor(num) {
      this.num = num;
      this.box = [];
    }
  
    add(number) {
        this.box.push(number);
    }

    addAt(index,number) {
        this.box.splice(index, 0, number);
    }
  
    get(index) {
        return this.box[index];
    }

    remove(index) {
        this.box.splice(1,index);
    }
  }

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList