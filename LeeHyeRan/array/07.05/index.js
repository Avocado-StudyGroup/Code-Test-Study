// 프로그래머스 제일 작은 수 제거하기
function solution(arr) {
  // 제일 작은 수 설정
  let min = Math.min(...arr);
  let answer = [];
  // 제일 작은 수가 아니라면 answer에 푸시
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== min) {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([4, 3, 2, 1]));
