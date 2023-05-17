// 카드 가져가기
// 답지 참고했습니다..!!
function solution1(nums, k) {
  let answer = 0;
  let n = nums.length;
  // 내림차순 정렬
  nums.sort((a, b) => b - a);
  let diff = [];
  for (let i = 1; i < n; i += 2) {
    // 1부터 홀수 인덱스 숫자 더해주기
    answer += nums[i];
    // 두 수의 차이값 배열에 넣어주기
    diff.push(nums[i - 1] - nums[i]);
  }
  // 배열 내림차순 정렬
  diff.sort((a, b) => b - a);
  // 교환 가능 횟수만큼, 차이값이 큰 숫자 순서대로 더해줌
  for (let i = 0; i < k; i++) answer += diff[i];
  return answer;
}

console.log(solution1([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2));
// 문제를 보고 왜 두번째 라운드 때 8을 안가져 갈까 생각했었는데 차이값이 더 큰게 유리해서였습니다!

// 이진수 정렬
// toString 기억이 안나서 검색했습니다!
function solution2(nums) {
  let answer = [];
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    // 숫자를 이진수로 변환
    let str = nums[i].toString(2);
    let count = 0;
    // 1의 개수 카운트
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "1") {
        count++;
      }
    }
    // 답지 참고해서 배열 수정
    // 1의 개수 카운트한것과 숫자를 배열로 푸시
    array.push([count, nums[i]]);
  }
  // 답지에는 count 가 같은경우 예외처리가 빠져있어서 추가
  // 오름차순 정렬 후 answer에 푸시
  array.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  for (let [a, b] of array) {
    answer.push(b);
  }
  return answer;
}

console.log(solution2([5, 6, 7, 8, 9]));
