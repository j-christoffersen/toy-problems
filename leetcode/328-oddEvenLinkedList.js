/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (head === null) return null;

  const odds = new List();
  const evens = new List();

  let curNode = head;
  let odd = true;
  let oddEnd = null;
  while (curNode) {
    if (odd) {
      odds.push(curNode);
      oddEnd = curNode;
    } else {
      evens.push(curNode);
    }

    const tmp = curNode.next;
    curNode.next = null;
    curNode = tmp;
    odd = !odd;
  }

  oddEnd.next = evens.head;
  return odds.head;
};

class List {
  constuctor() {
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (this.head) {
      this.tail.next = node;
      this.tail = this.tail.next;
    } else {
      this.head = this.tail = node;
    }
  }
}
