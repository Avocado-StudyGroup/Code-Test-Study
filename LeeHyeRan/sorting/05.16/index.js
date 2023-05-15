// 선택정렬
function solution1(nums) {
  let answer = [];
  let array = nums;
  // 원래 배열의 길이가 0이 될때까지
  while (array.length) {
    // array의 최소값을 answer에 push
    answer.push(Math.min(...array));
    // array의 최소값을 삭제
    for (let i = 0; i < array.length; i++) {
      if (array[i] === Math.min(...array)) {
        array.splice(i, 1);
        break;
      }
    }
  }
  return answer;
}

console.log(solution1([2, 8, 3, 6, 1, 7, 5, 9]));

// 버블정렬
// 위에 방법과 다르게 풀어야 할것 같아서 답지 참고했습닷..!
function solution2(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // 양옆의 숫자를 비교해서 큰숫자를 뒤로 배치
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

console.log(solution2([7, 6, 10, 9, 8]));
