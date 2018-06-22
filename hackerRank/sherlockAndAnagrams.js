// Complete the sherlockAndAnagrams function below.
function areAnagrams(s, b1, e1, b2, e2) {
  const s1obj = {};
  const s2obj = {};

  for (let i = b1; i < e1; i++) {
    const char = s[i];
    s1obj[s] = s1obj[char] || 0;
    s1obj[char]++;
  }

  for (let i = b2; i < e2; i++) {
    const char = s[i];
    s2obj[char] = s2obj[char] || 0;
    s2obj[char]++;
  }

  for (let key in s1obj) {
    if (s1obj[key] !== s2obj[key]) {
      return false;
    }
  }

  for (let key in s2obj) {
    if (s1obj[key] !== s2obj[key]) {
      return false;
    }
  }

  return true;
}

function sherlockAndAnagrams(s) {
  let count  = 0;

  for (let begin1 = 0; begin1 < s.length; begin1++) {
    for (let end1 = begin1 + 1; end1 <= s.length; end1++) {
      for (let begin2 = begin1 + 1; begin2 <= s.length - (end1 - begin1); begin2++) {
        const end2 = begin2 + (end1 - begin1);

        if (areAnagrams(s, begin1, end1, begin2, end2)) {
          count++;
        }
      }
    }
  }

  return count;
}