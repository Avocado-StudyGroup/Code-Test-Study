function solution(arr) {
  return arr.length === 1 ? [-1] : arr.slice(0, arr.length - 1);
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]

// 내가 예전에 풀었던 풀이
function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((el) => el !== Math.min(...arr));
}
