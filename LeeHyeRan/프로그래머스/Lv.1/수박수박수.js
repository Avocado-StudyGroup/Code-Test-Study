function solution(n) {
  let answer = "";
  let su = "수";
  let bak = "박";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      answer += su;
    } else {
      answer += bak;
    }
  }
  return answer;
}

function solution(n) {
  let answer = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) answer += "수";
    if (i % 2 === 1) answer += "박";
  }
  return answer;
}
