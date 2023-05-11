// 올바른괄호

// 초기 미완성 풀이
const solution = (s) => {
  let answer = 'YES';
  const convertS = s.split('');
  const findLeft = convertS.filter((el) => el === '(').length;
  const findRight = convertS.filter((el) => el === ')').length;

  for (let i = 0; i < s.length; i++) {
    if (
      s.length % 2 !== 0 ||
      findLeft !== findRight ||
      s[0] === ')' ||
      findLeft === 0 ||
      findRight === 0
    )
      return (answer = 'NO');

    convertS.shift(i);
    convertS.pop(s.length - 1);

    if (!convertS.includes(')') || !convertS.includes('(')) {
      answer = 'NO';
    }
  }

  return answer;
};

// 답지
function solution2(s) {
  let answer = 'YES';
  let stack = [];
  for (let x of s) {
    if (x == '(') stack.push(x);
    else {
      if (stack.length == 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

// test code
console.log(solution2('(())()')); //"YES"
console.log(solution2('(()(()')); //"NO"
console.log(solution2('()())')); //"NO"
console.log(solution2('())(')); //"NO"
