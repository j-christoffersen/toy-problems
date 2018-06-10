// Complete the chiefHopper function below.
function chiefHopper(arr) {
  let energy = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    energy = Math.ceil((energy + arr[i]) / 2);
  }

  }
}