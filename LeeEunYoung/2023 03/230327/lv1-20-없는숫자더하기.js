// `includes(탐색문자열, 시작인덱스)`
// 배열이 특정요소를 갖고 있는지 판별. 대소문자 구분
// 시작인덱스에 음수 입력시, 뒤에부터 세기
// `foreack(callback)` callback(element, index, array)

function solution(partArr) {
  // 다른 사람 풀이
  // for(let i = 0; i <= 9; i++) {
  //     if(!numbers.includes(i)) answer += i;
  // }

  const allArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const sumAll = allArr.reduce((a, b) => a + b);
  const sumPart = partArr.reduce((a, b) => a + b);
  return sumAll - sumPart;
}
