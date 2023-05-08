// 키보드
function solution1(s, k) {
  let answer = true;
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (!a.includes(s[i]) && !a.includes(s[i].toLowerCase())) {
      a.push(s[i]);
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase() && !a.includes("1")) {
      a.push("1");
    }
  }
  return a.length === k ? answer : (answer = false);
}

console.log(solution1("TeacHer", 7));
