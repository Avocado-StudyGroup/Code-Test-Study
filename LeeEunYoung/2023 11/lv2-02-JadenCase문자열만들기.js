// https://school.programmers.co.kr/learn/courses/30/lessons/12951

// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(s) {
  const answer = [];
  let word = [];
  // 공백을 기준으로 쪼갠다.
  const array = s.split(' ');

  // 하나의 요소 중 첫번째 문자를 대문자로 바꾼다.
  // 하나의 요소 중 첫번째 문자가 아니면 소문자로 바꾼다.
  for (let i = 0; i < array.length; i++) {
    word = [];
    for (let v = 0; v < array[i].length; v++) {
      if (v === 0) {
        word.push(array[i][v].toUpperCase());
      } else {
        word.push(array[i][v].toLowerCase());
      }
    }
    answer.push(word.join('') + ' ');
  }

  const newStr = answer.join('');

  return newStr.slice(0, newStr.length - 1);
}

// 다른 사람 풀아
// function solution(s) {
//   return s
//     .split(' ')
//     .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
//     .join(' ');
// }
