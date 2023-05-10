// 봉우리

const solution = (nums) => {
  //격자 가장자리 0으로 초기화
  const newNums = [];
  newNums.push(Array(nums.length + 2).fill(0));
  for (let i = 0; i < nums.length; i++) {
    nums[i].unshift(0);
    nums[i].push(0);
    newNums.push(...nums);
  }
  newNums.push(Array(nums.length + 2).fill(0));

  //봉우리 찾기
  let answer = 0;
  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= nums.length; j++) {
      newNums[i][j] > newNums[i - 1][j] &&
      newNums[i][j] > newNums[i + 1][j] &&
      newNums[i][j] > newNums[i][j - 1] &&
      newNums[i][j] > newNums[i][j + 1]
        ? (answer += 1)
        : null;
    }
  }
  return answer;
};

// test code
console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
); //10
console.log(
  solution([
    [11, 15, 17, 23, 13, 5, 12],
    [25, 18, 11, 16, 21, 7, 22],
    [37, 13, 17, 22, 14, 11, 33],
    [35, 27, 38, 34, 31, 22, 12],
    [38, 22, 33, 21, 25, 33, 11],
    [11, 33, 12, 13, 26, 35, 12],
    [17, 22, 23, 11, 15, 13, 21],
  ])
); //10
