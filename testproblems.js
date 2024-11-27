// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

let nums
nums = [1, 2, 3];
console.log(nums)
let target
target = 5;
console.log(nums.length);
let size
size = nums.length;

for (let i=0; i<size; i++){
    for (let j=i+1; j<size; j++){
        let sum;
        sum = nums[i]+nums[j];
        if (target == sum) {
            let answer
            answer = [i, j]
            console.log(answer)
            return answer
        }
    }
}



