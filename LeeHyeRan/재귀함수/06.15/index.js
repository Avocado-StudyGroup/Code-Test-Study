// 중복순열 구하기
// 답지 참고했습니다!
function solution1(n, m) {
  let answer = [];
  let tmp = [];
  function DFS(L) {
    // 2개가 되면 answer에 push
    if (L === m) answer.push(tmp.slice());
    else {
      // 1부터 n 전까지 push, pop 반복, pop은 뒤에 숫자만 바꿔주기 위해 진행
      for (let i = 1; i <= n; i++) {
        tmp.push(i);
        DFS(L + 1);
        tmp.pop();
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution1(3, 2));
