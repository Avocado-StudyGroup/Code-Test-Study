// 최댓값위치

const solution = (nums) => {
  let r = 0;
  let c = 0;
  let max = Number.MIN_SAFE_INTEGER;

  //이중배열 순회
  for (let i = 0; i < nums.length; i++) {
    for (let v = 0; v < nums.length; v++) {
      //최댓값 구하기
      if (nums[i][v] > max) {
        //최댓값
        max = nums[i][v];
        //행과 열
        r = i + 1;
        c = v + 1;
      }
    }
  }
  return [r, c];
};

// test code
console.log(
  solution([
    [3, 23, 85, 34, 17, 74, 25, 52, 65],
    [10, 7, 39, 42, 88, 52, 14, 72, 63],
    [87, 42, 18, 78, 53, 45, 18, 84, 53],
    [34, 28, 64, 85, 12, 16, 75, 36, 55],
    [21, 77, 45, 35, 28, 75, 90, 76, 1],
    [25, 87, 65, 15, 28, 11, 37, 28, 74],
    [65, 27, 75, 41, 7, 89, 78, 64, 39],
    [47, 47, 70, 45, 23, 65, 3, 41, 44],
    [87, 13, 82, 38, 31, 12, 29, 29, 80],
  ])
); //[5, 7]
