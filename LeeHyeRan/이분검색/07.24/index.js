// 이분 검색으로 숫자 7 찾기
// 오름 차순 정렬이 안되어 있다면 정렬 해주어야 함
// 재귀 함수 사용
function solution() {
  let nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let k = 7;
  function binarySearch(arr, target, start, end) {
    // 값이 없는 경우
    if (start > end) return -1;
    let mid = Math.floor((start + end) / 2);
    // 찾은 경우 중간 인덱스 반환
    if (arr[mid] === target) return mid;
    // 중간점의 값보다 찾는 값이 작은 경우 끝점을 중간 인덱스로 변경
    else if (arr[mid] > target)
      return binarySearch(arr, target, start, mid - 1);
    // 찾는 값이 중간 값보다 큰경우 시작점을 중간 인덱스로 변경
    else return binarySearch(arr, target, mid + 1, end);
  }

  let answer = binarySearch(nums, k, 0, nums.length - 1);
  return answer + 1;
}

console.log(solution());

// 반복문 사용
function solution1() {
  let nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let k = 7;
  function binarySearch(arr, target, start, end) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === target) return mid;
      else if (arr[mid] > target) end = mid - 1;
      else start = mid + 1;
    }
    return -1;
  }
  let answer = binarySearch(nums, k, 0, nums.length - 1);
  return answer + 1;
}

console.log(solution1());

// 예산 문제
// 전체 국가예산이 485이고 4개 지방의 예산요청이 각각 120, 110, 140, 150 인경우
// 가능한 최대의 총 예산을 사용할 경우 상한액을 계산하는 문제
// ex) 120, 110, 127, 127 을 분배할 경우 합이 484로 최대 예산을 사용하게 된다. 상한가 = 127
function solution2(nums, k) {
  let answer = 0;
  // 시작점과 끝점 설정
  let start = 1;
  let end = nums.reduce((a, b) => Math.max(a, b));
  while (start <= end) {
    // 중간점 설정
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    // 예산 배정 중간 값과 예산 값을 비교해서 작은걸 더해줌
    for (let x of nums) {
      total += Math.min(mid, x);
    }
    // 조건 만족 시 상한액 증가 시키기
    if (total <= k) {
      answer = mid;
      start = mid + 1;
      // 조건 만족하지 못하면 상한액 감소 시키기
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution2([120, 110, 140, 150], 485));
