function solution(s) {
  let answer = "";
  let arr = s.split(" ").map(Number);
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return (answer = min + " " + max);
}

console.log(solution("1 2 3 4"));
