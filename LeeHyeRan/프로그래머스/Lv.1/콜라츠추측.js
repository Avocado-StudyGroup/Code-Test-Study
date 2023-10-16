function solution(num) {
  let answer = 0;
  for (let i = 0; i <= 500; i++) {
    if (num === 1) {
      return answer;
    } else if (i === 500) {
      return -1;
    } else if (num % 2 === 0) {
      answer += 1;
      num = num / 2;
    } else if (num % 2 === 1) {
      answer += 1;
      num = num * 3 + 1;
    }
  }
  return answer;
}

function solution(num) {
  let answer = 0;
  if (num === 1) return 0;
  for (let i = 1; i <= 500; i++) {
    if (num % 2 === 0 && num !== 1) {
      answer += 1;
      num = num / 2;
    } else if (num % 2 !== 0 && num !== 1) {
      answer += 1;
      num = num * 3 + 1;
    }
  }
  return answer >= 500 ? -1 : answer;
}
