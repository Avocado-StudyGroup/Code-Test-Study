function solution(s) {
  let answer = [-1];
  let arr = s.split("");
  for (let i = 1; i < arr.length; i++) {
    let tmp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && j < i) {
        tmp === 0 ? (tmp = i - j) : (tmp = Math.min(tmp, i - j));
      }
    }
    tmp === 0 ? answer.push(-1) : answer.push(tmp);
  }
  return answer;
}

const solution = (s) =>
  [...s].map((char, i) => {
    const count = s.slice(0, i).lastIndexOf(char);
    return count < 0 ? count : i - count;
  });
