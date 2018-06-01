

function gamingArray(arr) {
  const stack = [];
  stack.push(arr[arr.length - 1]);

  for (let i = arr.length - 2; i >= 0; i--) {
    let topEl = stack.pop();
    while (topEl !== undefined && topEl < arr[i]) {
      topEl = stack.pop();
    }

    if (topEl !== undefined) stack.push(topEl);
    stack.push(arr[i]);
  }

  return stack.length % 2 === 0 ? 'BOB' : 'ANDY';
}
