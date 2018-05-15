/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const ransomNoteCount = {};
  const magazineCount = {};
  for (let i = 0; i < ransomNote.length; i++) {
    ransomNoteCount[ransomNote[i]] = ransomNoteCount[ransomNote[i]] || 0;
    ransomNoteCount[ransomNote[i]]++;
  }

  for (let i = 0; i < magazine.length; i++) {
    magazineCount[magazine[i]] = magazineCount[magazine[i]] || 0;
    magazineCount[magazine[i]]++;
  }

  const letters = Object.keys(ransomNoteCount);

  for (letter of letters) {
    if ((magazineCount[letter] || 0) < (ransomNoteCount[letter] || 0)) {
      return false;
    }
  }

  return true;
};