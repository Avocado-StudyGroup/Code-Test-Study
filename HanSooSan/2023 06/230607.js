// 초코볼

const solution1 = (nums, h) => {
  let answer;
  const count = (k) => {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.ceil(x / k);
    }
    return cnt;
  };
  let lt = 1;
  let rt = Math.max(...nums);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(mid) <= h) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
};

console.log(solution1([29, 12, 24, 5, 19], 6));

// 데이터 센터
const solution2 = (board) => {
  let answer = 0;
  let n = board.length;
  let lt = 1,
    rt = 0,
    sum = 0;
  board.forEach((e) => {
    rt = Math.max(rt, Math.max(...e));
    sum += e.reduce((a, b) => a + b);
  });
  const Count = (m) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] >= m) cnt += m;
        else cnt += board[i][j];
      }
    }
    return cnt;
  };
  while (lt <= rt) {
    let m = parseInt((lt + rt) / 2);
    if (Count(m) >= sum / 2) {
      answer = m;
      rt = m - 1;
    } else {
      lt = m + 1;
    }
  }
  return answer;
};
console.log(
  solution2([
    [2, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
);
