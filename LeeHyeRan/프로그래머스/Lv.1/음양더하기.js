function solution(absolutes, signs) {
  let answer = 0;
  let a = absolutes;
  let b = signs;
  for (let i = 0; i < a.length; i++) {
    if (b[i] === true) {
      answer += a[i];
    } else {
      answer -= a[i];
    }
  }
  return answer;
}

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
