function solution(num) {
  return String(num)
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}

console.log(solution(10)); // 3
console.log(solution(12)); // 11
