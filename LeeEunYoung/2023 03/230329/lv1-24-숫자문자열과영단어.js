// - `p.replace('dog', 'monkey')` 첫 번째 문자열만 치환, 원래 문자열은 변경X
// - `p.replaceAll('dog', 'monkey')` 모든 일치 항목 치환, 원래 문자열은 변경X
// - isNaN(x) 숫자가 아닌 값은 true
// - 'one4seveneight'.split('one') // ['', '4seveneight']
// - 'one4seveneight'.split('one').join(1) // '14seveneight’

function solution(str) {
  // 같은 숫자 처리 못해줌
  NUM_CONSTANTS.forEach((el, i) => {
    str = str.replace(el, i);
  });

  // 추가 대비
  // while 문 쓰면 좋을 듯
  if (isNaN(str)) {
    NUM_CONSTANTS.forEach((el, i) => {
      str = str.replace(el, i);
    });
    return Number(str);
  } else {
    return Number(str);
  }
}

const NUM_CONSTANTS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];
