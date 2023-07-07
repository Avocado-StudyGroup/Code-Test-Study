// 공사비용
function solution3(cost, m) {
  let answer = 0;
  for (let i = 0; i < cost.length; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < cost.length; j++) {
      // sum에 공사비용 더해주기
      sum += cost[i + j];
      // 공사비용이 작은 구간 카운트
      if (sum <= m) {
        count++;
      }
      // answer에 count큰 값 할당
      count > answer ? (answer = count) : answer;
    }
  }
  return answer;
}

console.log(solution3([100, 50, 120, 50, 150, 0, 50, 60], 400));
