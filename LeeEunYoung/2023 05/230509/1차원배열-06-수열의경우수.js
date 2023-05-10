// 수열의경우수

const solution = (nums) => {
  let count = 0;
  const n = nums.length;
  let peak = [];
  // 답지참고 n이 아니라 n-1
  for (let i = 1; i < n - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) peak.push(i);
  }

  for (p of peak) {
    let lt = p;
    let rt = p;
    // 답지참고
    let lcnt = 0;
    let rcnt = 0;
    while (lt > 0 && nums[lt - 1] < nums[lt]) {
      lcnt++;
      lt--;
    }
    while (rt < n - 1 && nums[rt] > nums[rt + 1]) {
      rcnt++;
      rt++;
    }
    count += lcnt * rcnt;
  }
  return count;
};

// test code
console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1])); //6
console.log(solution([1, 2, 3, 4, 5, 3, 2, 1])); //12
console.log(solution([1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1])); //10
