/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let i = 0;
  while (i * i < num) {
    i++;
  }

  return i * i === num;
};