function solution(left, right) {
  let answer = 0;
  let index = 1;
  let num = left;
  let tmp = [];
  // rigth 숫자보다 작거나 같을때까지
  while (num <= right) {
    // 숫자의 반값 보다 인덱스 숫자가 작거나 같을때까지
    while (index <= num / 2) {
      // 나눠서 0으로 떨어지면 tmp에 푸시
      if (num % index === 0) tmp.push(index);
      index++;
    }
    tmp = [...tmp, num];
    // tmp가 짝수이면 더해주고 홀수이면 빼주기
    if (tmp.length % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
    num++;
    tmp = [];
    index = 1;
  }
  return answer;
}
