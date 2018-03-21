/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n === 0) {
    return 1;
  }
  
  // no combos when int length > 11
  if (n > 11) {
    n = 11;
  }

  let num = 1;

  for (let i = n - 2; i >= 0; i--) {
    num = num * (9 - i) + 1;
  }

  num = num * 9 + 1;

  return num;
};


// O(n^2) Solution
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countNumbersWithUniqueDigits = function(n) {
//   let sum = 1;

//   for (let i = 0; i < n + 1; i++) {
//     let product = 1;
//     for (let j = 0; j < i; j++) {
//       product *= (9 - j);
//     }

//     sum += 9 * product;
//   }

//   return sum;
// };
