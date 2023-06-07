// 이분검색
function solution1(nums, m) {
  // 버블 정렬로 오름 차순 정렬
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  // m 값을 만나면 인덱스 번호 반환
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === m) {
      return i + 1;
    }
  }
}

console.log(solution1([23, 87, 65, 12, 57, 32, 99, 81], 32));

// 랜선자르기
// 답지를 봐도 이해가 잘 안되네욥..
function solution2(nums, n) {
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
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution2([802, 743, 457, 539], 11));
