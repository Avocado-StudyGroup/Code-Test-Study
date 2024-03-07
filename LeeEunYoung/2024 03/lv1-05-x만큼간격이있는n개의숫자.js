// 음수가 안됨
function solution(x, n) {
  const arr = [];

  for (let i = x; i <= x * n; i += x) {
    arr.push(i);
  }
  return arr;
}

// 풀이보기
function solution(x, n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }
  return arr;
}

console.log(solution(2, 5)); // [2,4,6,8,10]
console.log(solution(4, 3)); // [4,8,12]
console.log(solution(-4, 2)); // [-4,-8]
