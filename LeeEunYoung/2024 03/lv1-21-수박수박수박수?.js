function solution(num) {
  return '수박'.repeat(num).slice(0, num);
}

console.log(solution(3)); // '수박수'
console.log(solution(4)); // '수박수박'
