function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 === 0) {
      answer = `${s[s.length / 2 - 1]}` + `${s[s.length / 2]}`;
    } else {
      answer = s[Math.ceil(s.length / 2 - 1)];
    }
  }
  return answer;
}

function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}
