// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.

let nums;
let val;
let k;

nums = [3, 2, 2, 3];
val = 3;
k = 0;

for (let i=0; i<nums.length; i++){
    if (nums[i] == val){
        nums[i] = '_';
        k++;
    }
}

console.log(k);
console.log(nums);
