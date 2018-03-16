/**
 * @param {string[]} words
 * @return {number}
 */
const hasMatchingChars = (word1, word2) => {
  // assume words are sorted
  let i = 0;
  let j = 0;

  while (word1[i] && word2[j]) {
    if (word1[i] === word2[j]) {
      return true;
    } else if (word1[i] > word2[j]) {
      j++;
    } else {
      i++;
    }
  }

  return false;
};

const maxProduct = (words) => {
  const sortedWords = words.map((word) => {
    return word.split('').sort().join('');
  });

  let max = 0;
  for (let i = 0; i < sortedWords.length; i++) {
    for (let j = 0; j < sortedWords.length; j++) {
      if (
        sortedWords[i] !== sortedWords[j] &&
        !hasMatchingChars(sortedWords[i], sortedWords[j]) &&
        sortedWords[i].length * sortedWords[j].length > max
      ) {
        max = sortedWords[i].length * sortedWords[j].length;
      }
    }
  }

  return max;
};