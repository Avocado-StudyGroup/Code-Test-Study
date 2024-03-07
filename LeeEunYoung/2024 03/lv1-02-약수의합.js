function solution(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    num % i === 0 ? arr.push(i) : undefined;
  }
  return arr.reduce((a, b) => a + b);
}

console.log(solution(12)); // 28
console.log(solution(5)); // 6
