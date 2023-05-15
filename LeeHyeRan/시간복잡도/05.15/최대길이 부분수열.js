// 최대길이 부분수열
function solution4(nums, k) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    let count = k;
    let len = 0;
    for (let j = 0; j < nums.length; j++) {
      // 1을 만나면 길이 더해주기
      if (nums[i + j] === 1) {
        len += 1;
        // 0을 만나고 바꿀수 있는 횟수가 0이 아니라면 카운트 해주고 횟수 빼주기
      } else if (nums[i + j] === 0 && count !== 0) {
        count -= 1;
        len += 1;
        // 0을 만나고 카운트가 0이라면 len 랑 비교해서 큰값을 answer에 할당 후 for문 빠져나오기
      } else if (nums[i + j] === 0 && count === 0) {
        len > answer ? (answer = len) : answer;
        break;
      }
      // 바꿀수 있는 최대 횟수를 다쓰고도 계속 더해줬다면 마지막에 len랑 비교해서 answer에 큰 값 할당
      len > answer ? (answer = len) : answer;
    }
  }
  return answer;
}

console.log(solution4([1, 1, 0, 0], 2));
