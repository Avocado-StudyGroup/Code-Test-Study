// 프로그래머스 숫자짝궁

function solution(X, Y) {
  let answer = "";
  // x, y map생성
  let xMap = new Map();
  let yMap = new Map();
  // map에 set설정
  for (let i = 0; i < X.length; i++) {
    xMap.set(X[i], (xMap.get(X[i]) || 0) + 1);
  }
  for (let i = 0; i < Y.length; i++) {
    yMap.set(Y[i], (yMap.get(Y[i]) || 0) + 1);
  }
  // 겹치는 숫자 count에 할당
  // 9부터 큰숫자대로 answer에 더해주기
  for (let i = 9; i >= 0; i--) {
    const str = String(i);
    let count = Math.min(xMap.get(str), yMap.get(str));
    answer += str.repeat(count);
  }

  return answer ? (Number(answer) ? answer : "0") : "-1";
}

console.log(solution("100", "2345"));
