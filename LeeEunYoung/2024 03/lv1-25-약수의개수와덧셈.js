function solution(left, right) {
  let arr = [];
  // 1.매개변수 사이의 수의, 약수 구하기
  for (let i = left; i <= right; i++) {
    let divisorArr = [];
    for (let j = 1; j <= i; j++) {
      Number.isInteger(i / j) ? divisorArr.push(j) : undefined;
    }
    // 2.1에서 구한 약수의 개수 구하기 + 개수가 홀수인지 짝수인지 알기
    arr.push(divisorArr.length % 2 === 0 ? i : i * -1);
  }

  return arr.reduce((a, b) => a + b);
}

console.log(solution(13, 17)); // 43
console.log(solution(24, 27)); // 52
