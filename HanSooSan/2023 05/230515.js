// 선택 정렬
const solution1 = (nums) => {
  // 다음거 있을 때 까지 비교해야되니까 nums.length -1 까지 돌고
  for (let i = 0; i < nums.length - 1; i++) {
    // 가장 작은 숫자여야 될 변수
    let min = i;
    // 다음거 없을 때 까지 비교해야 하니까 nums.length까지 돌고
    for (let j = i + 1; j < nums.length; j++) {
      // 다음부터 확인할 값이 현재 nums[i] 보다 크면 min을 업데이트 해준다
      if (nums[min] > nums[j]) min = j;
    }

    if (min !== i) [nums[i], nums[min]] = [nums[min], nums[i]];
  }

  return nums;
};

console.log(solution1([2, 8, 3, 6, 1, 7, 5, 9]));

// 버블 정렬
const solution2 = (nums) => {
  // 1회전 끝나면 더 큰 숫자가 나오기 전 까지 오른쪽으로 순서 변경되어있음.
  for (let i = 0; i < nums.length - 1; i++) {
    // 계속 다음거 확인하면서 바꿔줌..
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }

  return nums;
};

console.log(solution1([2, 8, 3, 6, 1, 7, 5, 9]));
