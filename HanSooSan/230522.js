// 이분 검색
const solution1 = (nums, m) => {
  let answer;

  nums.sort((a, b) => a - b);
  let lt = 0, rt = nums.length - 1;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (nums[mid] === m) {
      answer = mid + 1;
      break;
    }
    else if (nums[mid] > m) rt = mid - 1;
    else lt = mid + 1;
  }

  return answer;
}

console.log(solution1([23, 87, 65, 12, 57, 32, 99, 81], 32))

// 랜선자르기
const solution2 = (nums, n) => {

  let answer;
  function count(len) {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.floor(x / len);
    }
    return cnt;
  }
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(mid) >= n) {
      answer = mid;
      lt = mid + 1;
    }
    else {
      rt = mid - 1;
    }
  }

  return answer;
}

console.log(solution2([802, 743, 457, 539], 11))
