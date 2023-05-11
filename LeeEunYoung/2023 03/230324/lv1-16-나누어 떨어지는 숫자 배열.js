// sort()
// 원본 배열을 수정시킴.
// 문자원소배열.sort() : 오름차순
// 숫자원소배열.sort() : 그냥 오름차순 안됨. 요소를 문자열로 변환 한 후, UTF-16 코드 단위 값으로 비교하기 때문! `sort((a, b) => a - b)`

function solution(arr, divisor) {
  const newArr = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return newArr.length === 0 ? [-1] : newArr;
}
