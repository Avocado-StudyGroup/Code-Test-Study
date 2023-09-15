function solution(n) {
  let answer = 0;
  let three = n.toString(3);
  let reverse = String(three).split("").reverse().join("");
  answer = parseInt(reverse, 3);
  return answer;
}

const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
};
