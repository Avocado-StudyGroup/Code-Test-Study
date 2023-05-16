// 쇠막대기
// 답지참고

const solution = (s) => {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') stack.push(s[i]);
    else {
      stack.pop();
      if (s[i - 1] == '(') answer += stack.length;
      else answer++;
    }
  }
  return answer;
};

// test code
console.log(solution('()(((()())(())()))(())')); //17
console.log(solution('(((()(()()))(())()))(()())')); //24
console.log(solution('((((()))))')); //8
console.log(solution('(((())))(())((()))')); //12
