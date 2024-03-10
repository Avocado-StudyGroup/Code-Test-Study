// 첫번째 풀이
function solution(num) {
  for (let i = 1; i < num; i++) {
    if (num < 4) {
      return -1;
    } else if (num === i * i) {
      return (i + 1) * (i + 1);
    }
  }
}

// 답지보고 풀이
function solution2(num) {
  let answer = 0;
  for (let i = 0; i < num; i++) {
    if (num === i * i) {
      return (answer = (i + 1) * (i + 1));
    } else {
      answer = -1;
    }
  }
  return answer;
}

console.log(solution2(121)); // 144
console.log(solution2(3)); // -1
