// 삽입 정렬
const solution1 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let chk = i
    while (nums[chk] < nums[chk - 1]) {
      [nums[chk], nums[chk - 1]] = [nums[chk - 1], nums[chk]]
      chk--
    }
  }

  return nums;
}

console.log(solution1([2, 8, 3, 6, 1, 7, 5, 9]));
// 왼쪽에 숫자가 크면 계속 자리를 바꿔준다.

// 교환 횟수
const solution2 = (nums) => {
  // 일단 0으로 nums.length만큼 배열을 채워놓는다.
  let answer = new Array(nums.length).fill(0)

  for (let i = 0; i < nums.length - 1; i++) {
    // 최초 sum은 nums[i] 이걸 비교해가면서 업데이트하고 가장 작아졌을 때 저장된 idx값 참고해서 바꿔줌
    let sum = nums[i];
    let idx = i
    for (let j = i + 1; j < nums.length; j++) {
      if (sum > nums[j]) {
        sum = nums[j]
        idx = j
      }
    }
    // 바귄 idx 번호 idx와 i를 하나씩 올려준다.
    // 만약에 앞에 작은 숫자가 없어서 idx가 변하지 못하고 중첩 for문을 지나왔을 때에는 추가해줄 필요가 없다.
    if (i !== idx) {
      // 배열 위치 정렬
      [nums[i], nums[idx]] = [nums[idx], nums[i]]
      answer[idx]++
      answer[i]++
    }
  }

  return answer;
}

console.log(solution2([5, 4, 2, 1, 3]))