// 프로그래머스 실패율
// 다른 테스트케이스들 통과가 안되네욥..ㅠ
function solution(N, stages) {
  let answer = [];
  let fail = [];
  let stageN = Array.from({ length: N }, (v, i) => i + 1);
  let user = stages.length;
  // 실패한 사람들 수 배열에 넣어주기
  for (let i = 0; i < stageN.length; i++) {
    let tmp = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === stageN[i]) {
        tmp += 1;
      }
    }
    fail.push(tmp);
  }

  // 실패율 구해서 넣어주기
  for (let i = 0; i < fail.length; i++) {
    stageN[i] = fail[i] / user;
    user = user - fail[i];
  }

  // answer에 실패율 높은 스테이지 순서대로 넣어주기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (stageN[j] === Math.max(...stageN) && !answer.includes(j + 1)) {
        answer.push(j + 1);
        stageN[j] = 0;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
