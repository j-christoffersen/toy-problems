function sockMerchant(n, ar) {
  const socks = {};

  ar.forEach((sock) => {
    socks[sock] = socks[sock] || 0;

    socks[sock]++;
  });

  let pairs = 0;

  Object.values(socks).forEach((total) => {
    pairs += Math.floor(total / 2);
  });

  return pairs;
}
