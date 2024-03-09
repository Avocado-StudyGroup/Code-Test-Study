function solution(num) {
  const sum = String(num)
    .split('')
    .map((string) => string * 1)
    .reduce((a, b) => a + b);
  return num % sum === 0;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
