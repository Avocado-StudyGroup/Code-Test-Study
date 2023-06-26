// 시간 복잡도 연산 횟수를 최대한 줄인다

// 카드 가져가기
const solution1 = (nums, k) => {
  let answer = nums.reduce((a, b) => a + b, 0);
  let m = nums.length - k;
  let sum = 0;
  let minS = 30000000;

  for (let i = 0; i < m; i++) sum += nums[i];
  minS = sum;

  let lt = 0;
  for (let rt = m; rt < nums.length; rt++) {
    sum += nums[rt] - nums[lt];
    minS = Math.min(minS, sum);
    lt++;
  }

  return answer - minS;
};
// console.log(solution1([2, 3, 7, 1, 2, 1, 5], 4));

// 배열 전체를 합치고 안 쓰는 카드 숫자를 더해 빼준다.
// 아해 못함

// 부분 수열
const solution2 = (nums, m) => {
  let answer = 0;
  let sum = 0;
  let lt = 0;

  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    // sum이 m을 넘어가면 nums[lt]를 빼주면서 lt를 올려준다
    while (sum > m) {
      sum -= nums[lt];
      lt++;
    }

    if (sum === m) answer++;
  }

  return answer;
};

// console.log(solution2([1, 1, 2, 1, 3, 1, 1, 1, 2], 6));
// 바이토닉 수열 아님 주의

// 공사 비용
const solution3 = (cost, m) => {
  let answer = 0;
  let len = 0;
  let rt = 0;
  let lt = 0;
  let sum = 0;

  // cost[rt]를 하나하나 추가하면서 answer(구간)을 올려준다 그리고 예상 초과의 경우
  // constArr에 현재까지의 구간 길이를 넣어주고 lt를 올리면서 구간 길이를 빼준다
  while (rt < cost.length) {
    sum += cost[rt];
    rt++;
    len++;

    while (sum > m) {
      sum -= cost[lt];
      lt++;
      len--;
    }

    answer = Math.max(answer, len);
  }

  return answer;
};

// console.log(solution3([100, 200, 300, 400, 500, 100], 300));
// 바이토닉 수열 아님 주의

// 최대 길이 부분수열
const solution4 = (cost, m) => {
  let answer = 0;
  let sum = 0;
  let rt = 0;
  let t = 0;

  for (let i = 0; i < cost.length; i++) {
    rt = i;
    sum = 0;
    t = 0;
    while (rt < cost.length) {
      if (cost[rt] === 0) t++;
      if (t > m) break;
      sum++;
      rt++;
    }
    answer = Math.max(answer, sum);
  }

  return answer;
};
console.log(solution4([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2), "최대길이");

// rt로 앞으로 나가면서 0이 m개가 될 때까지 길이를 샌다
// 0이 2개가 되고 그 다음 좌표까지만 lt가 오를 수 있도록 하고 (t >= m - 1) lt++;
// rt를 lt로 바꿔준다 (0m개가 되더라도 다음 1 길이를 올려줘야 하기 때문에 rt를 계속 계산 0이 하나 더 나오면 lt로 rt를 변경후 다시)
// 계산하던 길이와 answer 을 비교하여 answer을 바꿔준다.

// 연속된 자연수의 합
const solution5 = (n) => {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum = 0;

  while (rt < n) {
    if (sum > n) {
      sum -= arr[lt];
      lt++;
    } else {
      sum += arr[rt];
      rt++;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
};

// console.log(solution5(98765));
// n 길이의 arr를 만들고
// rt를 올리면서 arr[rt]를 sum에 추가
// snm 이 m과 같으면 answer 올려주고 m을 초과해버리면 sum에서 arr[lt]를 빼고 lt를 올려줌
