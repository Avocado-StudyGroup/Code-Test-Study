function solution(price, money, count) {
  let answer = 0;
  let p = 0;
  for (let i = 1; i <= count; i++) {
    p += price * i;
  }
  p > money ? (answer = p - money) : answer;
  return answer;
}
