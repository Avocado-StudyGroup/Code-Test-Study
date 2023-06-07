// 초코볼
// 오름차순으로 정렬
// 0번째 부터 먹는데 걸리는 시간을 k에 더해줌
// k와 주어진 시간 h가 같으면 return 같지 않으면 k 초기화
function solution1(nums, h) {
  let answer;
  let k = 0;
  let arr = nums.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        k += Math.ceil(arr[j] / arr[i]);
      } else {
        k += 1;
      }
    }
    if (k === h) {
      return (answer = arr[i]);
    } else {
      k = 0;
    }
  }
}

// 초코볼 답지풀이
function solution(nums, h) {
  let answer;
  // 초코볼 먹는데 걸리는 시간 구해주는 함수
  function count(k) {
    let cnt = 0;
    for (let x of nums) {
      cnt += Math.ceil(x / k);
    }
    return cnt;
  }

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
}

console.log(solution1([29, 12, 24, 5, 19], 6));

// 데이터 센터
// 전체 컴퓨터의 절반 값인 mid 값을 구함
// answer 값을 하나씩 올려가면서 count에 더해주고 count값이 mid 값보다 크거나 같아지면 answer 반환
function solution2(board) {
  let answer = 0;
  let mid = 0;
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      mid += board[i][j];
    }
  }
  mid = Math.floor(mid / 2);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] > answer) {
        count += board[i][j];
      }
    }
    answer++;
    if (count >= mid) {
      return answer;
    }
  }
}

// 데이터 센터 답지풀이
function solution(board) {
  let answer = 0;
  let n = board.length;
  let lt = 1,
    rt = 0,
    sum = 0;
  board.forEach((e) => {
    // board에서 가장 큰 값 rt에 할당
    rt = Math.max(rt, Math.max(...e));
    // board 전체 값 sum
    sum += e.reduce((a, b) => a + b);
  });
  // 컴퓨터 개수 세는 함수
  function Count(m) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] >= m) cnt += m;
        else cnt += board[i][j];
      }
    }
    return cnt;
  }
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
}

console.log(
  solution2([
    [2, 3, 1, 5, 6],
    [3, 0, 7, 4, 3],
    [8, 5, 7, 5, 6],
    [9, 6, 1, 5, 5],
    [5, 5, 8, 5, 1],
  ])
);
