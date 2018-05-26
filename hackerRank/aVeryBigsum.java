static long aVeryBigSum(long[] ar) {
  long out = 0;

  for (int i = 0; i < ar.length; i++) {
    out += ar[i];
  }

  return out;
}