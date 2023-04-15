const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  add(value) {
    if (this.length === 0) {
      this.head = new ListNode(value);
    } else {

      let current = this.head;
      while(current.next) {
        current = current.next;
      }

      current.next = new ListNode(value);
    }

    this.length++;
  }

  rmAt(pos) {
    if (pos < 0 || pos >= this.length) {
      return;
    }

    let c = this.head

    if (pos === 0) {
      this.head = c.next
    } else {
      let pv = null
      let i = 0

      while (i < pos) {
        pv = c
        c = c.next
        i++
      }
      pv.next = c.next
    }
    this.length--
    return c.value
  }

  rm(el) {
    while (this.indexOf(el) != -1) {
      this.removeAt( this.indexOf(el) )
    }
  }

  indexOf(el) {
    let c = this.head
    let i = 0

    while (c) {
      if (c.value === el) {
        return i
      }

      c = c.next
      i++
    }
  }
}

function removeKFromList(l, k) {
  let list = new LinkedList()
  let {val, next} = l
  list.add(l)
  console.log(list)
  // remove line with error and write your code here
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
removeKFromList(initial, 3)
module.exports = {
  removeKFromList
};
