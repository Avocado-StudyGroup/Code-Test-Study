function solution(a, b) {
  let array = [];

  for (let i = 0; i < a.length; i++) {
    b[i] ? array.push(a[i]) : array.push(a[i] * -1);
  }

  return array.reduce((a, b) => a + b);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
