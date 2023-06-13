// 마구간 정하기
// 답지 참고했습니다! 문제 이해가 잘 안되네욥!
function count(stable, dist) {
  let cnt = 1, // 무조건 1마리는 되니까 1로 시작
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      // 말 배치 가능 여부 체크
      cnt++; // 말 마리수 증가
      ep = stable[i];
    }
  }
  return cnt;
}
function solution(stables, c) {
  let answer;
  stables.sort((a, b) => a - b);
  let lt = 1;
  let rt = stables[stables.length - 1];
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stables, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3));
