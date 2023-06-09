// 로봇이동
// 답지참고

const solution = (board, k) => {
  let answer = [];
  let n = board.length;
  //상하좌우
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  let d = 1,
    count = 0;
  let x = 0,
    y = 0,
    nx,
    ny;
  //로봇 이동 초 세기
  while (count < k) {
    count++;
    [nx, ny] = [x + dx[d], y + dy[d]];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] == 1) {
      d = (d + 1) % 4;
      continue;
    }
    [x, y] = [nx, ny];
  }
  answer.push(x);
  answer.push(y);
  return answer;
};

// test code
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
    ],
    10
  )
); //[2, 2]
console.log(
  solution(
    [
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 0],
    ],
    25
  )
); //[4, 1]
