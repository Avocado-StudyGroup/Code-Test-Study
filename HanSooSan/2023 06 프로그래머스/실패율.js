function solution(N, stages) {
  var answer = [];
  let rate = [];

  // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수 구하면 된다
  for (let i = 1; i <= N; i++) {
    // i 는 스테이지 숫자 ,stages에서 i와 같은 스테이지에 있는 친구만 다 뽑아다 길이  / i보다 높은 곳에 있는애들 길이
    rate.push([i, stages.filter((v) => v === i).length / stages.filter((v) => i < v).length]);
  }

  // 각 스테이지의 번호를 실패율 내림차순으로 정렬해야하니까 정렬해주고 정렬한 대로 돌려서 answer에 넣어준다
  rate
    .sort((a, b) => {
      if (a[1] === b[1]) return a[1] - b[1];
      return b[1] - a[1];
    })
    .forEach((v) => {
      answer.push(v[0]);
    });

  return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
