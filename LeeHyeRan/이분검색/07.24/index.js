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
