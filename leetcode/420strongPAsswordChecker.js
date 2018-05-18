/**
 * @param {string} s
 * @return {number}
 */
const strongPasswordChecker = function(s) {
  let hasLowerCase = false;
  let hasUppercase = false;
  let hasDigit = false;
  let [threes, fours, fives] = [0, 0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 'a' && s[i] <= 'z') hasLowerCase = true;
    if (s[i] >= 'A' && s[i] <= 'Z') hasUppercase = true;
    if (s[i] >= '0' && s[i] <= '9') hasDigit = true;
    if (s[i] === s[i - 1] && s[i] === s[i - 2]) {
      let amountInARow = 2;
      while(s[i] === s[i - 1]) {
        amountInARow++;
        i++;
      }
      threes += Math.floor(amountInARow / 3) - 1;
      threes += amountInARow % 3 === 0;
      fours += amountInARow % 3 === 1;
      fives += amountInARow % 3 === 2;
    }
  }

  const charConstraintCount = !hasLowerCase + !hasUppercase + !hasDigit;

  if (s.length < 6) {
    return Math.max(threes + fours + fives, charConstraintCount, 6 - s.length + fives);
  }

  if (s.length <= 20) {
    return Math.max(threes + fours + fives, charConstraintCount);
  }

  let toSubtract = s.length - 20;
  let toReplace = charConstraintCount;
  let moves = 0;

  [fives, toReplace, moves] = [
    Math.max(0, fives - toReplace),
    Math.max(0, toReplace - fives),
    Math.min(toReplace, fives)
  ];

  [fours, toReplace, moves] = [
    Math.max(0, fours - toReplace),
    Math.max(0, toReplace - fours),
    Math.min(toReplace, fours),
  ];

  [threes, toReplace, moves] = [
    Math.max(0, threes - toReplace),
    Math.max(0, toReplace - threes),
    Math.min(toReplace, threes),
  ];

  [threes, toSubtract, moves] = [
    Math.max(0, threes - toSubtract),
    Math.max(0, toSubtract - threes),
    Math.min(threes, toSubtract),
  ];

  [fours, toSubtract, moves] = [
    Math.max(0, fours - Math.floor(toSubtract / 2)),
    Math.max(toSubtract % 2, toSubtract - fours * 2),
    Math.min(toSubtract, fours * 2),
  ];

  [fives, toSubtract, moves] = [
    Math.max(0, fives - Math.floor(toSubtract / 3)),
    Math.max(toSubtract % 3, toSubtract - fives * 3),
    Math.min(toSubtract, fives * 3),
  ];

  return toSubtract + toReplace + moves;
};
