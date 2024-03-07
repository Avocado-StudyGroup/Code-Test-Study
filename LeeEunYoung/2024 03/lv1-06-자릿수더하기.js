// 원래 풀이
function solution(num) {
  let answer = 0;
  let arr = String(num).split('');

  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  return answer;
}

// 답지 보고 바꿔본 풀이
function solution2(num) {
  return String(num)
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}

console.log(solution2(123)); // 6
console.log(solution2(987)); // 24
