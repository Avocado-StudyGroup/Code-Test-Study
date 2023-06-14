// 회의실 배정
const solution1 = (times) => {
  // 무조건 한 강의실은 쓰니까 1에서 시작
  let answer = 1;
  times.sort((a, b) => a[0] - b[0]);
  let sp = times[0][0];
  let ep = times[0][1];

  for (let i = 1; i < times.length; i++) {
    // 첫 번째 강의실 끝나는 시간과 현 강의실 시작 시간을 비교하여 answer ++
    if (ep <= times[i][0]) {
      answer++;
      sp = times[i][0];
      ep = times[i][1];
      // 현 강의실 시작 시간이 전 강의실 시작시간보다 같거나 늦고 끝 시간이 짧을 경우 시작,끝 시간을 변경
    } else if (sp <= times[i][0] && ep >= times[i][1]) {
      sp = times[i][0];
      ep = times[i][1];
    }
  }

  return answer;
};

// console.log(
//   solution1([
//     [3, 3],
//     [1, 3],
//     [2, 3],
//   ])
// );

// 이동 횟수
const solution2 = (nums) => {
  let answer = 0;
  nums.sort((a, b) => a - b);
  console.log(nums);
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    if (nums[lt] + nums[rt] <= 5) {
      answer++;
      lt++;
      rt--;
    } else {
      answer++;
      rt--;
    }
  }

  return answer;
};

// console.log(solution2([2, 3, 4, 5]));
// 풀이법 타이타닉과 동일
// 제한사항 : 모든 물건의 무게는 2kg이상 5kg이하입니다. (무조건 드는 물건은 2개 이하)

// 씨름 선수
const solution3 = (nums) => {
  let answer = nums.length;
  nums.sort((a, b) => a[0] - b[0]);
  let ht = nums[0][1];

  // 몸무게는 오름차순 되어있기 때문에 키가 더 큰 참가자가 나온다면 전 참가자를 탈락 시키면 됌.
  for (let i = 1; i < nums.length; i++) {
    if (ht < nums[i][1]) {
      answer--;
    }
    ht = nums[i][1];
  }

  return answer;
};

console.log(
  solution3([
    [177, 50],
    [180, 60],
    [176, 65],
    [175, 67],
  ])
);
