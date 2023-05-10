// 올바른 괄호
function solution1(s) {
  let answer = "YES";
  let check = [];
  for (let i = 0; i < s.length; i++) {
    // "(" 이면 배열에 추가
    if (s[i] === "(") {
      check.push("(");
      // check 에 "(" 가 있을때만 pop
    } else if (check.length !== 0 && check.includes("(")) {
      check.pop();
    } else {
      check.push(")");
    }
  }
  return check.length === 0 ? answer : (answer = "NO");
}

console.log(solution1(")())"));
