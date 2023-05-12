// 최대 매출
function solution1(nums, k) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    //비교 변수 설정
    let num = 0;
    // 연속된 숫자 3개를 더해줌
    for (let j = 0; j < k; j++) {
      num += nums[i + j];
    }
    // 최대값 max에 할당
    if (num > max) max = num;
  }
  return max;
}

console.log(solution1([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4));
