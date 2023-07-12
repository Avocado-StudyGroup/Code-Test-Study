// 프로그래머스 두 큐합 같게 만들기
function solution(queue1, queue2) {
  let totalArr = [...queue1, ...queue2];
  let maxCount = totalArr.length * 2;
  // 투 포인터 시작점, 끝점 설정
  let start = 0;
  let end = queue1.length;

  const sum = (arr) => arr.reduce((a, b) => a + b);
  // 총합 구하기
  let totalNum = sum(totalArr.slice(start, end));
  // 중간 값 구하기
  let goalNum = sum(totalArr) / 2;
  let count = 0;

  while (count <= maxCount) {
    if (totalNum < goalNum) {
      totalNum += totalArr[end];
      end++;
    } else if (totalNum > goalNum) {
      totalNum -= totalArr[start];
      start++;
    } else if (totalNum === goalNum) {
      return count;
    }
    count++;
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
