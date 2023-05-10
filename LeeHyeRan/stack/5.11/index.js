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

// 괄호 문자 제거
function solution2(s) {
  let answer = [];
  // 괄호 확인 배열
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      arr.push(s[i]);
    } else if (s[i] === ")") {
      arr.pop();
      // 괄호가 하나도 없으면 answer에 추가
    } else if (arr.length === 0) {
      answer.push(s[i]);
    }
  }
  return answer.join("");
}

console.log(solution2("A((AF)B)(D)E(F)G"));

// 연속된 문자 지우기
function solution3(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    // 배열의 길이가 0보다 크고, 배열의 마지막 값과 비교값이 같으면 빼내기
    if (answer.length > 0 && s[i] === answer[answer.length - 1]) {
      answer.pop();
    } else {
      answer.push(s[i]);
    }
  }

  return answer.join("");
}

console.log(solution3("bacccaba"));
