// 이동횟수
function solution1(nums) {
  let answer = 0;
  // 오름차순 정렬
  nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    // 양 끝 값을 더해주고 5보다 작거나 같으면 answer++
    // start end 포인트 이동
    if (nums[start] + nums[end] <= 5) {
      answer += 1;
      start += 1;
      end -= 1;
    } else {
      answer += 1;
      end -= 1;
    }
  }
  return answer;
}

console.log(solution1([2, 3, 4, 5]));

// 씨름선수
// 답지 참고했습니다~!
function solution2(bodys) {
  let answer = 0;
  // 키큰순으로 정렬
  bodys.sort((a, b) => b[0] - a[0]);
  let maxWeight = 0;
  for (let i = 0; i < bodys.length; i++) {
    // 최대 몸무게 비교하면서 answer에 더해주기
    if (bodys[i][1] > maxWeight) {
      maxWeight = bodys[i][1];
      answer += 1;
    }
  }
  return answer;
}

console.log(
  solution2([
    [177, 50],
    [180, 60],
    [176, 65],
    [175, 67],
  ])
);
