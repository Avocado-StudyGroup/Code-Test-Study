//침몰하는 타이타닉
// 그리디 풀이 유형 확인하고 싶어서 답지 참고했습니다!
function solution1(nums, m) {
  let answer = 0;
  let lt = 0;
  let rt = nums.length - 1;
  nums.sort((a, b) => a - b); //오름차순 정렬
  while (lt <= rt) {
    // 양쪽 끝 합한 값 비교후 왼쪽 오른쪽 이동
    if (nums[lt] + nums[rt] <= m) {
      answer++;
      lt++;
      rt--;
    } else {
      answer++;
      rt--;
    }
  }
  return answer;
}

console.log(solution1([90, 50, 70, 100, 60], 140));

// 선긋기
// 답지 참고했습니다..!
function solution2(nums) {
  let answer = 0;
  // x축 기준 오름차순 정렬
  nums.sort((a, b) => a[0] - b[0]);
  let start = nums[0][0]; // x
  let end = nums[0][1]; // y
  for (let i = 1; i < nums.length; i++) {
    // 선이 겹치는 지 확인 겹치면 end포인트 이동
    if (nums[i][0] <= end && nums[i][1] > end) {
      end = nums[i][1];
      // 겹치지 않는다면 길이 더해주기
    } else if (nums[i][0] > end) {
      answer += end - start;
      start = nums[i][0];
      end = nums[i][1];
    }
  }
  // 마지막 남은 길이 더해줌
  answer += end - start;
  return answer;
}

console.log(
  solution2([
    [5, 6],
    [1, 3],
    [7, 8],
    [9, 10],
  ])
);

// 회의실 배정
function solution3(times) {
  let answer = 1;
  times.sort((a, b) => a[0] - b[0]);
  let start = times[0][0];
  let end = times[0][1];
  for (let i = 1; i < times.length; i++) {
    if (times[i][0] <= end && times[i][1] < end) {
      start = times[i][0];
      end = times[i][1];
    } else if (times[i][0] >= end && times[i][1] >= end) {
      answer++;
      start = times[i][0];
      end = times[i][1];
    }
  }
  return answer;
}

console.log(
  solution3([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 7],
    [5, 6],
    [6, 7],
  ])
);
