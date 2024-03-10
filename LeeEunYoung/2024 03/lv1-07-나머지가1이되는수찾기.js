// 첫풀이(답 못 찾음)
function solution(num) {
  for (let i = 3; i < 1000000; i++) {
    return num % i === 1 && i;
  }
}

// 두번째 풀이
function solution2(num) {
  for (let i = 3; i < 1000000; i++) {
    if (num % i === 1) return i;
  }
}
console.log(solution2(10)); // 3
console.log(solution2(12)); // 11
