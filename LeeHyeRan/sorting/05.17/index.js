// 삽입정렬
// 이 방식 밖에 기억이 안났슴당.ㅎㅎ..
function solution1(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
}

// 삽입정렬 답지 풀이
function solution(nums) {
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    // 두번째 숫자부터 tmp에 할당
    let tmp = nums[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      // 앞에 숫자랑 비교 후 앞에 숫자가 작을때까지 비교해주기 앞에 숫자가 더 작다면 break
      if (nums[j] > tmp) nums[j + 1] = nums[j];
      else break;
    }
    nums[j + 1] = tmp;
  }
  return nums;
}

console.log(solution([2, 1, 4, 3]));

//교환횟수
function solution2(nums) {
  // nums의 길이만큼 0으로 채운 배열 생성
  let answers = Array.from({ length: nums.length }, () => 0);
  for (let i = 0; i < nums.length - 1; i++) {
    // 첫번째부터 minIndex 번호 할당
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[minIndex] > nums[j]) {
        minIndex = j;
      }
    }
    // minIndex 번호가 바뀌었다면 바뀐 위치에 +1 해주고 배열 순서 변경
    if (minIndex !== i) {
      answers[i]++;
      answers[minIndex]++;
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return answers;
}

console.log(solution2([5, 4, 2, 1, 3]));
