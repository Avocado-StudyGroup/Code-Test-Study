// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 첫번째 풀이, 효율성 테스트 1번 실패
function solution(s) {
  let store = 0;

  if (s.length % 2 !== 0 || s[0] === ')' || s[s.length - 1] === '(')
    return false;

  for (x of s) {
    if (x === '(') {
      store = store + 1;
    } else {
      store = store - 1;
      if (store < 0) return false;
    }
  }

  return store === 0;
}

// 두번째 풀이, 답지보고 아래로 고치니 제출 성공
// if 문을 간소화 해야 효율성이 올라가나보다

function solution(s) {
  let store = 0;

  if (s.length % 2 !== 0 || s[0] === ')' || s[s.length - 1] === '(')
    return false;

  for (x of s) {
    store = store + (x === '(' ? 1 : -1);
    if (store < 0) return false;
  }

  return store === 0;
}
