// - 숫자를 문자배열로 만들기 : `(n + "").split("")`
// - 그리고 배열원소들 더하기 : `.reduce((a, b) => +b + +a )`
// - true나 false 값은 직접 적지 않기 : `x % sum === 0`
// - 숫자 누적해서 변수에 넣어주려면, 변수를 0으로 초기화해주기.

function solution(x) {
  let str = x + '';
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return x % sum === 0 ? true : false;
}
