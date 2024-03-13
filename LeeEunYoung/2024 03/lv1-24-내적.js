function solution(a, b) {
  const answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  return answer.reduce((a, b) => a + b);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2])); // 3
console.log(solution([-1, 0, 1], [1, 0, -1])); // -2

// 다른사람 풀이
// 내 풀이는 2와 3이 혼용된 것 같이 생김
function solution2(a, b) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

function solution3(a, b) {
  var answer = a.reduce((acc, cur, idx) => (acc += cur * b[idx]), 0);
  return answer;
}
