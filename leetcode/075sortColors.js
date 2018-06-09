/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const RED = 0;
const WHITE = 1;
const BLUE = 2;

var swap = function(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

var sortColors = function(nums) {
    let r = 0;
    let w = 0;
    let b = nums.length - 1;
    while (w <= b) {
        if (nums[r] === RED) {
            r++;
            w++;
        } else if (nums[w] === WHITE) {
            w++;
        } else if (nums[b] === BLUE) {
            b--;
        } else if (nums[w] === RED && nums[r] === WHITE) {
            swap(r++, w++, nums);
        } else if (nums[w] === BLUE) {
            swap(w, b--, nums);
        }
    }
};