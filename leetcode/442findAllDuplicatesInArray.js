/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
const output = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) {
      output.push(Math.abs(nums[i]));
    } else {
      nums[Math.abs(nums[i]) - 1] *= -1;
    }
  }

  return output;
};
