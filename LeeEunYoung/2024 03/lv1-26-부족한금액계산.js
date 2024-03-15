function solution(price, money, count) {
  let answer = 0;
  for (let i = 1; i <= count; i++) {
    answer += price * i;
  }
  return answer - money <= 0 ? 0 : answer - money;
}

console.log(solution(3, 20, 4)); //  10
