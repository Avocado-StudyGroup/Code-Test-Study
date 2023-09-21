function solution(a, b) {
  let big = 0;
  let small = 0;
  let answer = 0;
  if (a > b) {
    big = a;
    small = b;
  } else {
    big = b;
    small = a;
  }
  for (let i = small; i <= big; i++) {
    answer += i;
  }
  return a === b ? a : answer;
}

function solution(a, b) {
  let answer = 0;
  let small = a > b ? b : a;
  let big = a > b ? a : b;
  for (let i = small; i <= big; i++) {
    answer += i;
  }
  return answer;
}
