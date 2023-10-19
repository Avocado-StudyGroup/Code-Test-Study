function solution(t, p) {
  let answer = 0;
  let len = p.length;
  let arr = t.split("");
  for (let i = 0; i < t.length; i++) {
    let com = t.slice(i, i + len);
    if (com <= Number(p) && com.length === len) {
      answer += 1;
    }
  }
  return answer;
}

function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}
