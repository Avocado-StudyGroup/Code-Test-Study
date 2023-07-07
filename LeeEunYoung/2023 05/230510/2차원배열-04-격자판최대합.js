// 격자판최대합

const solution = (nums) => {
  let maxArr = [];

  // 중복코드 없앴으면 좋았을 듯

  // 각 행의 합
  let rowMax = 0;
  for (let i = 0; i < nums.length; i++) {
    let rowSum = 0;
    for (let j = 0; j < nums.length; j++) {
      rowSum += nums[i][j];
    }
    if (rowSum > rowMax) {
      rowMax = rowSum;
    }
  }
  maxArr.push(rowMax);

  // 각 열의 합
  let columnMax = 0;
  for (let i = 0; i < nums.length; i++) {
    let columnSum = 0;
    for (let j = 0; j < nums.length; j++) {
      columnSum += nums[j][i];
    }
    if (columnSum > columnMax) {
      columnMax = columnSum;
    }
  }
  maxArr.push(columnMax);

  // 대각선의 합
  let diagonalMax = 0;
  for (let i = 0; i < nums.length; i++) {
    diagonalMax += nums[i][i];
  }
  maxArr.push(diagonalMax);

  // 대각선 반대의 합
  let diagonalReverseMax = 0;
  for (let i = 0; i < nums.length; i++) {
    diagonalReverseMax += nums[i][nums.length - i - 1];
  }
  maxArr.push(diagonalReverseMax);

  return Math.max(...maxArr);
};

// test code
console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
); //155
console.log(
  solution([
    [17, 19, 12, 11, 15],
    [17, 36, 30, 83, 11],
    [19, 30, 70, 53, 75],
    [17, 22, 67, 47, 37],
    [15, 37, 78, 93, 59],
  ])
); //287
console.log(
  solution([
    [57, 65, 22, 33, 11, 11],
    [15, 66, 77, 34, 21, 13],
    [55, 12, 11, 55, 11, 55],
    [54, 33, 66, 88, 11, 22],
    [88, 99, 12, 16, 18, 33],
    [11, 100, 22, 68, 88, 17],
  ])
); //375
