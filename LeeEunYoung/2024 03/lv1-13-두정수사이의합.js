function solution(a, b) {
  let arr = [];
  let num1 = Math.min(a, b);
  let num2 = Math.max(a, b);

  for (let i = num1; i <= num2; i++) {
    arr.push(i);
  }

  return arr.reduce((a, b) => a + b);
}

console.log(solution(3, 5)); // 12
console.log(solution(3, 3)); // 3
console.log(solution(5, 3)); // 12
