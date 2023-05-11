// string.repeat(반복횟수)
// [참고링크 문자열 자르기 (split, substr, substring, slice)](https://codechacha.com/ko/javascript-how-to-substring/)
// [참고링크 substring과 substr, 그리고 slice와 splice를 정리해보자!](https://velog.io/@hye_rin/JavaScript-substring-substr-slice#2-substr)
// `string.split(splitter, length)`
//     split(구분할 문자, 원소에서 몇개 출력할 것인지)
// `~~string.substr(startIndex , length)`~~
//     ~~substr(시작할 인덱스, 몇개문자열 자를지) //음수사용가능~~
//     ~~ECMA-262 표준에 따라, 사용자제할것~~
// `string.substring****(****startIndex, endIndex****)`**
//     //endIndex 전까지만 출력함. 음수사용불가
// `array.slice(startIndex, endIndex)`
//     // endIndex 전까지만 출력함. 음수사용가능. 새로운 배열 반환
// `array.splice(startIndex, length, 대체할 원소)`
//     //시작할 인덱스로부터 몇개 삭제할지.원본 배열 반환

function solution(phone_number) {
  // 문자열에서 맨뒷 -4부터 -1까지만 추출
  // 문자열 길이 - 4 만큼은 *로 작성

  // 문자열을 유사배열
  // 바로 phone_number.slice(-4,) 해도 됨
  const arr = phone_number.split('').slice(-4);

  // repeat 메서드 사용 가능
  // '*'.repeat(phone_number.length - 4)
  for (let i = 1; i <= phone_number.length - 4; i++) {
    arr.unshift('*');
  }

  // "*".repeat(s.length - 4) + s.slice(-4);
  return arr.join('');
}
