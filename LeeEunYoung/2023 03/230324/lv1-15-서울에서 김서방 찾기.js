// - [’a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘a’, ‘a’, ‘a’]
// - find : arr.find((el, index) ⇒ index === 2)) /// ‘c’
// - findIndex : arr.findIndex((el) ⇒ el === ‘c’)) /// 2
// - indexOf : arr.indexOf(’c’) // 2 `없다면 -1 반환함`

function solution(seoul) {
  const findIndex = seoul.findIndex((el) => el === 'Kim');
  return `김서방은 ${findIndex}에 있다`;
}
