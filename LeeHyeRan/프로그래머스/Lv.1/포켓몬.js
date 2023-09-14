function solution(nums) {
  let answer = 0;
  let N = nums.length / 2;
  let tmp = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (!tmp.includes(nums[i]) && tmp.length < N) {
      tmp.push(nums[i]);
    }
  }
  return (answer = tmp.length);
}

// function solution1(nums) {
//   const max = nums.length / 2;
//   const set = new Set(nums);
//   let A = set.size;
//   return max > A ? max : A;
// }

console.log(solution1([3, 3, 3, 2, 2, 2]));
