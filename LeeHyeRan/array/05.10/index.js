// 격자판 최대 합
// 첫번째 for문에서 행의 최대값 구하기
// 두번째 for문에서 열의 최대값 구하기
// 세번째 for문에서 각 대각선 합 구하기
function solution1(board) {
  let answer;
  let max = 0;
  // 대각선 합 변수
  let xSum = 0;
  let ySum = 0;
  for (let i = 0; i < board.length; i++) {
    let sum = 0;
    for (let j = 0; j < board[i].length; j++) {
      sum += board[i][j];
    }
    if (sum > max) max = sum;
  }
  for (let i = 0; i < board.length; i++) {
    let sum = 0;
    for (let j = 0; j < board[i].length; j++) {
      sum += board[j][i];
    }
    if (sum > max) max = sum;
  }
  for (let i = 0; i < board.length; i++) {
    xSum += board[0 + i][i];
    ySum += board[board.length - 1 - i][i];
  }
  return (answer = Math.max(max, xSum, ySum));
}

console.log(
  solution1([
    [17, 19, 12, 11, 15],
    [17, 36, 30, 83, 11],
    [19, 30, 70, 53, 75],
    [17, 22, 67, 47, 37],
    [15, 37, 78, 93, 59],
  ])
);

// 스카이 라인
function solution2(board) {
  let answer = 0;
  let n = board.length;
  // 앞쪽 옆쪽 스카이 라인 숫자 구하기
  let xMax = [];
  let yMax = [];
  for (let i = 0; i < n; i++) {
    yMax.push(Math.max(...board[i]));
    let max = 0;
    for (let j = 0; j < n; j++) {
      if (board[j][i] > max) {
        max = board[j][i];
      }
    }
    xMax.push(max);
  }
  // 스카이라인의 앞, 옆쪽 최대값중에 작은 값을 넘지 않는 선에서 더해주기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] < xMax[i] || board[i][j] < yMax[i]) {
        let min = Math.min(xMax[j], yMax[i]);
        answer += min - board[i][j];
      }
    }
  }
  console.log("here", answer);
  return answer;
}

console.log(
  solution2([
    [2, 5, 7, 3, 5],
    [6, 8, 9, 7, 3],
    [3, 2, 4, 5, 7],
    [7, 2, 5, 8, 6],
    [1, 2, 3, 4, 5],
  ])
);
