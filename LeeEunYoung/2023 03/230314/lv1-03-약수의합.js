const solution = (n) => {
  let answer = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    n % i ? null : arr.push(i);
  }

  answer = arr.reduce((a, b) => a + b, 0);

  return answer;
};
solution(12);
