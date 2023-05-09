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
// 첫번째 이중for문으로 앞, 옆쪽 최대값 구하기
// 두번째 이중for문에서 앞 옆쪽 최대값을 넘지 않는 선에서 빼주고 answer에 더해주기
function solution2(board) {
  let answer = 0;
  let n = board.length;
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
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] < xMax[i] || board[i][j] < yMax[i]) {
        let min = Math.min(xMax[j], yMax[i]);
        answer += min - board[i][j];
      }
    }
  }
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

// 봉우리
// 답지 참고했습니닷..!!
function solution3(board) {
  let answer = 0;
  let n = board.length;
  // 가로 좌우 비교시 사용
  let x = [-1, 0, 1, 0];
  // 세로 상하 비교시 사용
  let y = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < x.length; k++) {
        let nx = i + x[k];
        let ny = j + y[k];
        // 조건이 범위 안에 있고, 상하좌우 비교값이 더 크면 봉우리가 아니기 때문에 break 문으로 중단
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          board[nx][ny] >= board[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      // flag = 1이라면 봉우리이기 때문에 answer에 더해줌
      if (flag) answer++;
    }
  }
  return answer;
}

console.log(
  solution3([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);

// 로봇이동
// 답지 참고했습니당..!!
function solution4(board, k) {
  let answer = [];
  let n = board.length;
  // 상하좌우 비교
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let d = 1;
  let count = 0;
  let x = 0;
  let y = 0;
  let nx;
  let ny;
  while (count < k) {
    count++;
    [nx, ny] = [x + dx[d], y + dy[d]];
    // 배열의 범위를 벗어나거나 1이면 방향 틀어주고 continue
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] == 1) {
      d = (d + 1) % 4;
      continue;
    }
    // 현재 위치 x와 y에 업데이트
    [x, y] = [nx, ny];
  }
  answer.push(x);
  answer.push(y);
  return answer;
}

console.log(
  solution4(
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    10
  )
);
