// 재귀함수
// 답지가 누락이 되어서 재귀함수로 푸는방식을 확인을 못했슴다!
function solution1(N) {
  let answer = "";
  for (let i = 0; i < N; i++) {
    answer += i + 1;
  }
  return answer;
}

console.log(solution1(3));

//재귀함수를 이용한 이진수 출력
//재귀함수는 자신의 로직을 내부적으로 반복하다가 조건이 만족되면 함수이탈
function solution2(n) {
  let answer = 0;
  let tmp = [];
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      tmp.push(n % 2);
    }
  }
  DFS(n);

  for (let i = 0; i < tmp.length; i++) {
    answer = answer * 10 + tmp[i];
  }
  return answer;
}

console.log(solution2(11));

//조합의 경우 수
//아직 이해가 잘 가지 않네요 ㅠㅠ
function solution3(n, r) {
  let answer = [];
  // 35개 0으로 채워진 35개 배열 생성
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution3(5, 3));
