// 최대매출

// 본인 풀이
const solution = (n, k) => {
  let sumArr = [];

  for (let i = 0; i < n.length - (k - 1); i++) {
    // n.slice(i, i + k) : 연속된 k일 동안의 매출 기록 찾기
    // reduce((a, b) => a + b) : 찾은 것의 합계
    // 합계에서 최대값 찾기 위해 sumArr에 push
    sumArr.push(n.slice(i, i + k).reduce((a, b) => a + b));
  }

  // 합계 중 최댓값
  return Math.max(...sumArr);
};

// 답지 풀이
// 시간복잡도를 본인 풀이와 같이 풀어도 되는건지? 감이 안와서 답지 풀이 분석
const solution2 = (nums, k) => {
  let answer = 0;
  let sum = 0;
  // 0번째 index 원소부터 k번째 원소까지의 합을 answer에 반영
  for (let i = 0; i < k; i++) sum += nums[i];
  answer = sum;
  let lt = 0;
  for (let rt = k; rt < nums.length; rt++) {
    // index 0번째부터 k번째와 1번째부터 k+1 간의 차이
    // 초기 k 개의 원소 더한 것에, 차이를 계속 더함
    sum += nums[rt] - nums[lt];
    // 더해가면서 최대값 찾기
    answer = Math.max(answer, sum);
    lt++;
  }
  // return answer;
};

// test code
console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); //56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); //26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); //342
