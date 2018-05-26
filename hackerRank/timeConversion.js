function timeConversion(s) {
  if (s[8] === 'P') {

    return ((parseInt(s.substring(0, 2) % 12) + 12) +
    s.substring(2, 8);
  }

  if (s.substring(0, 2) === '12') {
    return '00' + s.substring(2, 8);
  }

  return s.substring(0, 8);
}
