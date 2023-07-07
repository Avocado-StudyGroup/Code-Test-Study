// 프로그래머스 실패율
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
    stageN[i] = [i + 1, fail[i] / user];
    user = user - fail[i];
  }

  // answer에 실패율 높은 스테이지 순서대로 넣어주기
  stageN
    .sort((a, b) => {
      if (a[1] === b[1]) return a[1] - b[1];
      else return b[1] - a[1];
    })
    .forEach((v) => answer.push(v[0]));

  return answer;
}

console.log(solution(4, [4, 4, 4, 4, 4]));
