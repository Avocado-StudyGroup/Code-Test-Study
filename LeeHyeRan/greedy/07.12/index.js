// 프로그래머스 빛의 경로 사이클

function solution(grid) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1]; // dx,dy를 둬서 방향을 둘 수 있게

  const visited = [...new Array(grid.length)].map((_, i) =>
    grid[i].split("").map((el) => [...new Array(4).fill(false), el])
  );
  //visited배열을 둬서 해당노드에서 배열이 4방향으로 쏜 기록을 저장

  const ret = []; //횟수를 저장할 배열

  const makeRange = (num, range) => {
    if (num < 0) return range + num;
    return num % range;
  }; // 0~n사이로 값을 고정하게 만들어주는 함수

  const colLen = visited.length;
  const rowLen = visited[0].length;
  //세로,가로줄 크기

  for (let i = 0; i < colLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      for (let k = 0; k < 4; k++) {
        if (visited[i][j][k]) continue; //지나갔던곳이면 pass

        visited[i][j][k] = true;
        const nx = makeRange(j + dx[k], rowLen);
        const ny = makeRange(i + dy[k], colLen);
        //다음 지나갈 곳을 설정
        const stk = [[ny, nx, k]];
        let cnt = 1;
        while (stk.length) {
          let [y, x, d] = stk.pop();
          const state = visited[y][x][4];
          // 왼쪽 회전이면 dx,dy배열에서 각각 -1, R이면 1씩 더한것과 같음
          if (state === "L") d = makeRange(d - 1, 4);
          else if (state === "R") d = makeRange(d + 1, 4);
          if (visited[y][x][d]) continue;
          visited[y][x][d] = true;
          const nx = makeRange(x + dx[d], rowLen);
          const ny = makeRange(y + dy[d], colLen);
          stk.push([ny, nx, d]);
          cnt++;
        }
        ret.push(cnt);
      }
    }
  }

  return ret.sort((a, b) => a - b);
}
