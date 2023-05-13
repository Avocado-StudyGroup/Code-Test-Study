// 올바른 괄호
const solution1 = (s) => {
  let answer = 'YES';
  let stack = []

  // "(" 일 때에는 넣고 ")" 일 때는 넣은걸 빼준다. 
  // 순서대로 해줄 경우 괄호가 정상적으로 닫힐 때 마다 stack.pop()
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') stack.pop()
    else stack.push(s[i])
  }

  // 만일 정상적이지 않은 괄호라면 stack에 괄호가 남는다. 그럼 NO
  if (stack.length !== 0) answer = 'NO'
  return answer;
}

console.log(solution1("(())()"))

// 괄호문자제거
const solution2 = (s) => {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // 계속 push 하다가 닫는 괄호가 나오면 여는 괄호가 나올 때 까지 전부 pop해준다
    if (s[i] === ")") {
      while (stack[stack.length - 1] !== ('(')) {
        stack.pop()
      }
      // 여는 괄호가 남아있으면 안되기 때문에 pop한 번 더 해준다.
      stack.pop()
    } else stack.push(s[i])
  }

  return stack.join('')
}

console.log(solution2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"))

// while 문에 메서드를 호출 할 수 있다는 사실을 안 이후에 다시 풀이 (괄호문자제거)
const solution3 = (s) => {
  let stack = []

  // 순서가 특별히 필요하지 않은 경우 for of문이 더 간편하다.
  for (let x of s) {
    if (x === ')') {
      // stack.pop을 계속 해주면서 그 대상이 "(" 이 되면 끝난다. 메서드가 먼저 실행되기 때문에 지운 이후에 멈춘다.
      while (stack.pop() !== '(');
    } else stack.push(x)
  }

  return stack.join('');
}

console.log(solution3("(A(BC)D)EF(G(H)(IJ)K)LM(N)"))

// 연속된 문자 지우기
const solution4 = (s) => {
  let stack = [];

  for (let x of s) {
    // 스택 배열 마지막이 현 값과 같으면 넣지 않고 pop 
    if (stack[stack.length - 1] === x) stack.pop()
    else stack.push(x);
  }

  return stack.join('');
}

console.log(solution4("bacccaba"))

// 쇠막대기 
const solution5 = (s) => {
  let answer = 0
  let stack = []

  for (let i = 0; i < s.length; i++) {
    // "(" 는 일단 push
    if (s[i] === '(') {
      stack.push(s[i])
      // 만일 ")"가 나왔는데 그 바로 전이 "(" 였다면 레이저 이므로 
      // stack의 마지막을 pop해주고 stack의 길이만큼 answer에 추가
    } else if (s[i - 1] === '(') {
      console.log(stack)
      stack.pop()
      answer += stack.length
    } else {
      // ")"가 나왔는데 이전에도 ")" 였다면 레이저가 아니므로 pop이후 answer 하나 추가
      stack.pop()
      answer++
    }
  }

  return answer;
}
console.log(solution5("()(((()())(())()))(())"))
// 이해가 너무 안돼서 삽질 너무 많이 함...
// 막대기가 이어지다 레이저를 쏘면 레이저를 제외한 옆에 "(" 숫자만큼 잘린 막대를 얻음
// 레이저는 아닌데 닫는 괄호가 나오면 하나를 얻음 (레이저가 포함된 막대는 다 잘랐으니 다음 막대를 자르는건 다음 레이저에게 넘김)
// 다음 레이저가 나오면 마찬가지로 레이저를 제외한 옆에 "(" 숫자만큼 잘린 막대를 얻음
// 레이저가 아닌데 닫는 괄호가 나오면 마찬가지로 그 막대는 다 잘린거라 하나 얻고 다음 레이저로 토스
// 반복할 경우 답이 나옴 
