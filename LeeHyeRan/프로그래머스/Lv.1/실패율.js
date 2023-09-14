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

function solution(N, stages) {
  let answer = [];
  let tmp = [];
  let people = stages.length;
  let clear = 0;
  for (let i = 0; i < N; i++) {
    tmp.push([i + 1, 0]);
  }
  for (let i = 0; i < stages.length; i++) {
    for (let j = 0; j < tmp.length; j++) {
      if (stages[i] === tmp[j][0]) {
        tmp[j][1] += 1;
      }
    }
    if (stages[i] === N + 1) {
      clear += 1;
    }
  }
  for (let i = 0; i < tmp.length; i++) {
    clear = tmp[i][1];
    tmp[i][1] = tmp[i][1] / people;
    people = people - clear;
  }
  tmp.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < tmp.length; i++) {
    answer.push(tmp[i][0]);
  }
  return answer;
}

function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
