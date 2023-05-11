// 초기 풀이
function solution(n) {
  const arr = Array.from(String(n));
  const numArr = arr.map((el) => el * 1);
  const sortArr = numArr.sort((a, b) => {
    return b - a;
  });
  return Number(sortArr.join(''));
}

// - 다른 풀이 보면서 배운 것
//     - 변수 문자열로 바꾸기  : `String(number)` / `number.toString()` / `n+""`
//     - 변수 숫자로 바꾸기 : `Number(string)` / `parseInt(string)` / `string * 1`
//     - 변수의 값 하나하나를 배열 원소화 시키기 : `split("")`
//     - 배열 내 원소 오름차순/내림차순 : `sort()` / `sort().reverse()`
//     - 배열 내 원소 하나의 변수로 합치기 : `join("")`

// 다른 사람 풀이 보고 리팩토링

function solution(n) {
  // const arr = Array.from(String(n));
  const arr = (n + '').split('');
  // const numArr = arr.map((el) => el * 1)
  // const sortArr = numArr.sort((a, b) => { return b - a });
  // return Number(sortArr.join(''));
  return arr.sort().reverse().join('') * 1;
}
