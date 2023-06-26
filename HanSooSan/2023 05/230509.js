// 격자판 최대합
const solution1 = (board) => {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    let [x, y, xy, yx] = [0, 0, 0, 0];

    // -> 왼,오,왼오 대각선 합친 값 구하기
    for (let j = 0; j < board[i].length; j++) {
      x += board[i][j];
      y += board[j][i];
      xy += board[j][j];
    }

    // -> 오왼 대각선 합친 값 구하기
    for (let j = board.length - 1; j >= 0; j--) {
      yx += board[i][j];
    }

    // answer과 각 값들 비교해 업데이트
    answer = Math.max(x, y, xy, yx, answer);
  }

  return answer;
};

console.log(
  solution1([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
);

// 스카이 라인
const solution2 = (board) => {
  let answer = 0;

  // 스카이 라인 x축 y축 구하기
  let x = [];
  let y = [];

  for (let i = 0; i < board.length; i++) {
    let [maxY, maxX] = [0, 0];

    for (let j = 0; j < board.length; j++) {
      if (maxX < board[i][j]) maxX = board[i][j];
      if (maxY < board[j][i]) maxY = board[j][i];
    }

    x.push(maxX);
    y.push(maxY);
  }

  // 스카이 라인 x,y축 중 가장 낮은 층 수에서 해당층 수를 빼면서 answer에 추가
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      answer += Math.min(x[i], y[j]) - board[i][j];
    }
  }

  return answer;
};

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
const solution3 = (board) => {
  let answer = 0;
  let n = board.length;

  // 좌표 초기화
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  // board의 갯수 대로 진행 만일 board가 정사각형이 아니라면 j는 board[i].length 까지 돌아야함
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // 봉우리가 맞을 때를 체크하기 위한 변수
      let chk = true;
      for (let k = 0; k < dx.length; k++) {
        // nx,ny 좌표는 동서남북 좌표를 돌면서 체크하기 위함
        let nx = i + dx[k];
        let ny = j + dy[k];

        // nx>=0 && nx<n && ny>=0 && ny<n 이 반대의 경우는 board를 넘어가는 것
        // board[nx][ny]>=board[i][j] : 동서남북이 다 작아야 하기에 크거나 같아도 안됨
        if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] >= board[i][j]) {
          chk = false;
          break;
        }
      }
      // 봉우리가 맞다면 chk의 변화는 없으므로 answer을 추가한다.
      if (chk) answer++;
    }
  }

  return answer;
};

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
const solution4 = (board, k) => {
  let answer = [];
  let n = board.length;
  // 방향을 결정지을 변수
  let d = 1;
  // 카운트 변수 생성
  let count = 0;
  // 좌표 초기화
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  // 현 좌표
  let [x, y] = [0, 0];
  // 이동 좌표
  let [nx, ny] = [0, 0];

  while (count < k) {
    // 카운트 올려주고, 좌표 이동 시키기
    count++;
    [nx, ny] = [x + dx[d], y + dy[d]];

    // nx < 0 || nx >= n || ny < 0 || ny >= n 이 경우는 board 바깥으로 나간 케이스
    // board[nx][ny] == 1 장애물에 걸린 케이스
    if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] == 1) {
      // 좌표를 바꿔주기위해 d를 ++ 5이상 올라가면 안되기에 %4
      d = (d + 1) % 4;
      // 위 두 케이스에 걸릴 경우 좌표 방향만 돌려주고 넘어간다 (방향 돌리는 것도 count ++)
      continue;
    }
    // 좌표를 이동시켰는데도 위 케이스에 걸리지 않는다면 그 위치로 이동 할 수 있다는 얘기니 현 좌표를 변경해준다.
    [x, y] = [nx, ny];
  }
  // 마지막으로 나온 현 좌표를 answer에 넣어주면 끝
  answer.push(x);
  answer.push(y);

  return answer;
};

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

// 프로그래머스 공원 산책
const solution10 = (park, routes) => {
  let answer = [];

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  let nx, ny;
  let x = 0,
    y = 0;
  let d;

  // 스타트 지점 찾기
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[0].length; j++) {
      if (park[i][j] === "S") {
        [x, y] = [i, j];
      }
    }
  }

  // 이동 좌표 체크
  let cntX = x,
    cntY = y;

  // 명령 횟수만큼 for문 돌리기
  for (let i = 0; i < routes.length; i++) {
    // 카운트 초기화
    let count = 0;

    // 방향 초기화
    switch (routes[i][0]) {
      case "N":
        d = 0;
        break;
      case "S":
        d = 2;
        break;
      case "W":
        d = 3;
        break;
      case "E":
        d = 1;
        break;
      default:
        return;
    }

    // 카운트동안 돌면서 좌표 체크 (카운트는 명령 배열 인덱스2의 숫자)
    while (count < routes[i][2]) {
      count++;

      // 이동 좌표 업데이트
      [nx, ny] = [x + dx[d], y + dy[d]];

      // 막히는 구간이 있으면 멈추고 좌표를 while문 전으로 돌린다.
      if (nx < 0 || ny < 0 || nx >= park[0].length || ny >= park[0].length || park[nx][ny] === "X") {
        [x, y] = [cntX, cntY];
        break;
      }

      [x, y] = [nx, ny];
    }
    [cntX, cntY] = [x, y];
  }

  // 마지막에 나온 좌표값 넣어주기
  answer.push(cntX);
  answer.push(cntY);

  return answer;
};

console.log(solution10(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
