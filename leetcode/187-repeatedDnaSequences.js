/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function(s) {
  const seen = {};
  const output = [];

  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substring(i, i + 10);
    if (seen[str]) {
      if (seen[str] === 1) {
        output.push(str);
      }
      seen[str]++;
    } else {
      seen[str] = 1;
    }
  }

  return output;
};
