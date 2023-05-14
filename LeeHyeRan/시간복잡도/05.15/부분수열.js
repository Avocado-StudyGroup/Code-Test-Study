//부분 수열
function solution2(nums, m) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    // sum 값 초기화
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      // 인덱스 0 부터 더해주다가 m이 되면 answer 카운트
      // 더해주는 숫자가 m이 되지 않는 다면 그대로 sum만 해주다가 넘어감
      sum += nums[i + j];
      if (sum === m) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution2([5, 5, 5], 5));
