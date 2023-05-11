// [reduce 함수](https://velog.io/@teo_ryu/javascript-reduce-%ED%95%A8%EC%88%98%EC%99%80-%EC%8B%B8%EC%9A%B0%EA%B8%B0)
// 배열원소의 합 구하기 `arr.reduce((acc, cur) ⇒ (acc + cur))`
// `arr.reduce((acc, cur) ⇒ (acc + cur, 0))` 0이라는 초기값 할당시, acc는 index 1번부터가 아니라 0부터됨.

function solution(absolutes, signs) {
  // signs 값을 반영한 새로운 배열 만들기
  // signs[i] ? absolutes[i] * 1 : absolutes[i] * (-1)
  // 새로운 배열의 합 구하기

  let arr = [];
  for (let i = 0; i <= absolutes.length - 1; i++) {
    signs[i] ? arr.push(absolutes[i] * 1) : arr.push(absolutes[i] * -1);
  }
  return arr.reduce((a, b) => a + b);
}
