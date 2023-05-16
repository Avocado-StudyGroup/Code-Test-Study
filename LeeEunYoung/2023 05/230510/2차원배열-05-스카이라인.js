// 스카이라인

const solution = (nums) => {
  let answer = 0;
  let frontLine = [];
  let sideLine = [];

  //스카이라인 구하기, 행과 열별 최대값 구하기
  for (let i = 0; i < nums.length; i++) {
    let rowMax = 0;
    let columnMax = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i][j] > rowMax) rowMax = nums[i][j];
      if (nums[j][i] > columnMax) columnMax = nums[j][i];
    }
    sideLine.push(rowMax);
    frontLine.push(columnMax);
  }

  //증가시킬 수 있는 최대 높이의 합 구하기
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      let min = Math.min(frontLine[j], sideLine[i]);
      answer += min - nums[i][j];
    }
  }
  return answer;
};

// test code
console.log(
  solution([
    [2, 5, 7, 3],
    [6, 8, 9, 7],
    [3, 2, 4, 5],
    [7, 2, 5, 8],
  ])
); //28
// console.log(
//   solution([
//     [3, 7, 6, 2],
//     [5, 3, 8, 7],
//     [3, 2, 5, 7],
//     [7, 7, 5, 3],
//   ])
// ); //33
// console.log(
//   solution([
//     [2, 5, 7, 3, 5],
//     [6, 8, 9, 7, 3],
//     [3, 2, 4, 5, 7],
//     [7, 2, 5, 8, 6],
//     [1, 2, 3, 4, 5],
//   ])
// ); //53
// console.log(
//   solution([
//     [10, 11, 12, 11, 15],
//     [15, 12, 13, 23, 11],
//     [11, 13, 23, 25, 1],
//     [11, 2, 3, 11, 13],
//     [5, 7, 9, 10, 12],
//   ])
// ); //89
