/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.listStack = [{list: nestedList, index: 0}];
  this._hasNext = nestedList.length > 0;
  this.iterate();
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this._hasNext;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  if (!this.hasNext()) {
    return null;
  }

  let curLevel = this.listStack[this.listStack.length - 1];
  var tmp = curLevel.list[curLevel.index++].getInteger();

  this.iterate();

  return tmp;
};

NestedIterator.prototype.iterate = function() {
  let curLevel = this.listStack[this.listStack.length - 1];

  this.up();
  curLevel = this.listStack[this.listStack.length - 1];

  while (this.hasNext() && !curLevel.list[curLevel.index].isInteger()) { 
    this.listStack.push({
      list: curLevel.list[curLevel.index++].getList(),
      index: 0,
    });

    curLevel = this.listStack[this.listStack.length - 1];

    if (!curLevel.list[curLevel.index]) {
      this.up();
      curLevel = this.listStack[this.listStack.length - 1];
    }
  }
};

NestedIterator.prototype.up = function() {
  let curLevel = this.listStack[this.listStack.length - 1];

  while (curLevel.index >= curLevel.list.length) {
    this.listStack.pop();
    if (this.listStack.length === 0) {
      this._hasNext = false;
      return;
    }
    curLevel = this.listStack[this.listStack.length - 1];
  }
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
