function solution(a, b, n) {
  let answer = 0;
  let cola = n;
  while (cola >= a) {
    answer += Math.floor(cola / a) * b;
    cola = cola - Math.floor(cola / a) * a + Math.floor(cola / a) * b;
  }
  return answer;
}
