/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var pq = new PriorityQueue((a, b) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  })

  pq.insert(1);

  var i = 0;
  var prevUgly = 0;
  var ugly;
  while (i < n) {
    while ((ugly = pq.remove()) <= prevUgly) {};
    // console.log(ugly);
    primes.forEach(prime => {
      pq.insert(ugly * prime);
    })
    prevUgly = ugly;
    i++;
  }

  return ugly;
};

class PriorityQueue {
  constructor(compare) {
    this._storage = [];
    this.compare = compare;
  }

  _exch(i, j) {
    let tmp = this._storage[i];
    this._storage[i] = this._storage[j];
    this._storage[j] = tmp;
  }

  _swim(i) {
    let j;
    while (i > 1 && this.compare(this._storage[i], this._storage[j = Math.floor(i / 2)]) > 0) {
      this._exch(i, j);
      i = j;
    }
  }

  _sink(i) {
    let j;
    while((j = 2 * i) < this._storage.length) {
      if (j + 1 < this._storage.length && this.compare(this._storage[j], this._storage[j + 1]) < 0) {
        j++;
      }

      if (this.compare(this._storage[j], this._storage[i]) < 0) {
        break;
      }
      
      this._exch(i, j);
      i = j;
    }
  }

  insert(value) {
    this._storage.push(value);
    this._swim(this._storage.length - 1);
  }

  remove() {
    this._exch(1, this._storage.length - 1);
    let value = this._storage.pop();
    this._sink(1);
    return value;
  }

  size() {
    return this._storage.length - 1;
  }
}