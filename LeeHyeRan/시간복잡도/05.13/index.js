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

// 공사비용
function solution3(cost, m) {
  let answer = 0;
  for (let i = 0; i < cost.length; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < cost.length; j++) {
      // sum에 공사비용 더해주기
      sum += cost[i + j];
      // 공사비용이 작은 구간 카운트
      if (sum <= m) {
        count++;
      }
      // answer에 count큰 값 할당
      count > answer ? (answer = count) : answer;
    }
  }
  return answer;
}

console.log(solution3([100, 50, 120, 50, 150, 0, 50, 60], 400));

// 최대길이 부분수열
function solution4(nums, k) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = k;
    let len = 0;
    for (let j = 0; j < nums.length; j++) {
      // 1을 만나면 길이 더해주기
      if (nums[i + j] === 1) {
        len += 1;
        // 0을 만나고 바꿀수 있는 횟수가 0이 아니라면 카운트 해주고 횟수 빼주기
      } else if (nums[i + j] === 0 && count !== 0) {
        count -= 1;
        len += 1;
        // 0을 만나고 카운트가 0이라면 len 랑 비교해서 큰값을 answer에 할당 후 for문 빠져나오기
      } else if (nums[i + j] === 0 && count === 0) {
        len > answer ? (answer = len) : answer;
        break;
      }
      // 바꿀수 있는 최대 횟수를 다쓰고도 계속 더해줬다면 마지막에 len랑 비교해서 answer에 큰 값 할당
      len > answer ? (answer = len) : answer;
    }
  }
  return answer;
}

console.log(solution4([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2));
