function solution(num) {
  return String(num)
    .split('')
    .reverse()
    .map((el) => Number(el));
}

console.log(solution(12345)); // 3
