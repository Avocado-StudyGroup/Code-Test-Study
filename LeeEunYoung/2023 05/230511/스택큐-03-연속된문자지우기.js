// 연속된문자지우기
// for문의 개별원소와 stack 안에 것 비교하는 방법

const solution = (s) => {
  let stack = [0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  stack.shift(0);
  return stack.join('');
};

// test code
console.log(solution('acbbcaa')); //"a"
console.log(solution('bacccaba')); //"bacaba"
console.log(solution('aabaababbaa')); //"a"
console.log(solution('bcaacccbaabccabbaa')); //"ba"
