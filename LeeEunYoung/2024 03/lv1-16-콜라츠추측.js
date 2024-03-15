function solution(num) {
  let tempNum = num;
  let count = 0;
  while (tempNum > 1) {
    if (count >= 500) {
      return -1;
    }
    if (tempNum % 2 === 0) {
      tempNum = tempNum / 2;
    } else {
      tempNum = tempNum * 3 + 1;
    }
    count++;
  }
  return count;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1
