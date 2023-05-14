// 연속된 자연수의 합
// 아래 방식으로 풀이했더니 결과값은 잘 나오지만,, 효율은 안좋은것 같아 답지 답안도 확인해 보았습니다!
function solution5(n) {
  let answer = 0;
  let nums = [];
  //1 ~ n 숫자 전까지 배열에 push
  for (let i = 1; i < n; i++) {
    nums.push(i);
  }
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    // 1, 2, 3.. 순으로 더해보고 n의 값이 나온다면 answer에 더하기
    for (let j = 0; j < nums.length; j++) {
      sum += nums[i + j];
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer;
}

// 연속된 자연수의 합 답지 풀이
function solution(n) {
  let answer = 0,
    sum = 0;
  // parseInt 는 문자열을 숫자로 리턴
  let m = parseInt(n / 2) + 1;
  // 1부터 배열에 담아줌
  let nums = Array.from({ length: m }, (v, i) => i + 1);
  let lt = 0;
  for (let rt = 0; rt < m; rt++) {
    sum += nums[rt];
    console.log("here", sum);
    // sum이 n보다 크면 n보다 작아질때까지 1부터 빼줌
    while (sum > n) {
      sum -= nums[lt++];
      console.log("ehhhh", sum);
    }
    if (sum === n) answer++;
  }
  return answer;
}

console.log(solution(15));
