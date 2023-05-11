function solution(arr) {
  let answer = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    answer = answer + arr[i];
  }
  return answer / arr.length;
}
