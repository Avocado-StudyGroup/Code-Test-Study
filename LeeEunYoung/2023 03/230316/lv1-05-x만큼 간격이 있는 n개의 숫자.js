function solution(x, n) {
  let answer = [x];
  for (let i = 1; i < n + 1; i++) {
    answer.push(i + i);
  }
  return answer;
}

//다른 사람 풀이
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
