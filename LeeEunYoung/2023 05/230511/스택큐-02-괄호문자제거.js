// 괄호문자제거

const solution = (s) => {
  let answer = [];
  let stack = [];
  for (let x of s) {
    if (x === '(') {
      stack.push(x);
    } else {
      if (stack.length === 0) {
        answer.push(x);
      } else if (x === ')') {
        stack.pop();
      }
    }
  }
  return answer.join('');
};

// test code
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); //"EFLM"
console.log(solution('((AF)B)(D)E(F)')); //"E"
console.log(solution('(Aab)(EsG)FFD')); //"FFD"
console.log(solution('(YYYDD)sh(kkf(hfs))')); //"sh"
console.log(solution('YY(YDD)sh(kkf(hfs))')); //"YYsh"
