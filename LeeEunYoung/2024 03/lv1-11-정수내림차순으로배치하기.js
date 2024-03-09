function solution(num) {
  return Number(String(num).split('').sort().reverse().join(''));
}

console.log(solution(118372)); // 873211
