// 카드 가져가기
function solution1(nums, k) {
  let max = 0;
  // 뒤에서 부터 k 개수의 숫자 합 비교 변수
  let backSum = 0;

  for (let i = 0; i < k; i++) {
    let sum = 0;
    // 처음엔 앞쪽 카드만 k 개 더해준 값 sum에 할당
    // 이후 부턴 앞쪽 카드에서 하나 씩 줄인 값만 sum에 할당 후 뒤에 카드 값 을 더해줌
    for (let j = 0; j < k - i; j++) {
      sum += nums[j];
    }
    // 앞쪽 카드 가져간 개수가 k - 1개 일때 부터 뒤쪽 카드를 1개 2개 3개 순으로 더해줌
    if (k - i < k) {
      for (let x = 0; x < i; x++) {
        sum += nums[nums.length - 1 - x];
      }
    }
    // 최대값을 max에 할당
    if (sum > max) max = sum;
  }
  // 맨 뒤쪽에서 k개수 만큼 가져간 합을 max와 비교 후 max보다 크다면 max할당
  for (let i = 0; i < k; i++) {
    backSum += nums[nums.length - 1 - i];
    if (backSum > max) max = backSum;
  }
  return max;
}

console.log(solution1([2, 3, 7, 1, 2, 1, 5], 4));

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
