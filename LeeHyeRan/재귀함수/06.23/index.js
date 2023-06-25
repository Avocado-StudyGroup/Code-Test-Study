// 순열 구하기
function solution1(nums, m) {
  let answer = [];
  let n = nums.length;
  // [0, 0, 0] 배열 생성
  let ch = Array.from({ length: n }, () => 0);
  let tmp = [];
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          // [1, 0, 0] 으로 만들고 3먼저 푸시
          // [3, 6] [3, 9] 가 들어가고
          // 6푸시 후 [0, 1, 0] 으로 변경
          // 반복
          tmp.push(nums[i]);
          DFS(L + 1);
          // [0, 0, 0]으로 초기화
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution1([3, 6, 9], 2));

//프로그래머스 피로도
function solution2(k, dungeons) {
  let answer = 0;
  let n = dungeons.length;
  let ch = Array.from({ length: n }, () => 0);
  function DFS(k, cnt) {
    for (let i = 0; i < n; i++) {
      // 던전을 방문하지 않았고 현재 피로도가 더 크다면
      if (!ch[i] && k >= dungeons[i][0]) {
        // 던전 방문표시
        ch[i] = 1;
        // 재귀
        DFS(k - dungeons[i][1], cnt + 1);
        // 방문표시 리셋
        ch[i] = 0;
      }
    }
    // 최대 던전수를 answer에
    answer = Math.max(answer, cnt);
    return;
  }
  DFS(k, 0);
  return answer;
}

console.log(
  solution2(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
