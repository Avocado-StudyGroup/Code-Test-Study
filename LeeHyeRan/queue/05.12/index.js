// 공주 구하기
function solution1(n, k) {
  let answer;
  let arr = [];
  // 1 ~ 8까지 숫자를 배열에 담아줌
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }
  // 배열의 길이가 0이 될때까지
  while (arr.length) {
    for (let i = 1; i < k; i++) {
      // 3번째 전까지 앞에 숫자를 빼서 뒤로 push
      arr.push(arr.shift());
    }
    // 3번째가 되면 제거
    arr.shift();
    // 배열이 하나 남았을때 answer지정
    if (arr.length === 1) {
      answer = arr.shift();
    }
  }
  return answer;
}

console.log(solution1(5, 3));
