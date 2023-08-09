// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container=[]) {
    this.container = container
  } 

  addToStack(el) {
    return this.container.unshift(el);
  }
  
  removeFromStack() {
    return this.container.shift();
  }
}

module.exports = Stack;