// https://school.programmers.co.kr/learn/courses/30/lessons/12939?language=javascript

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

function solution(s) {
  let answer = [];
  const stringArray = s.split(' ');
  const newStringArray = stringArray.map((el) => Number(el));
  answer.push(Math.min(...newStringArray));
  answer.push(' ');
  answer.push(Math.max(...newStringArray));

  return answer.join('');
}

// 다른 사람 풀이

// function solution(s) {
//     const arr = s.split(' ');
// 1.min과 max 안에는 유사배열 객체가 들어갈 수 있다.
// 2.min과 max는 숫자를 반환한다.
// 3.숫자+' '를 하면 문자열이 된다.
//     return Math.min(...arr)+' '+Math.max(...arr);
// }
