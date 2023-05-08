// 키보드
// 첫번째 for문에서 대문자먼저 a배열에 추가, 중복된 문자가 없으면 a배열에 추가
// 두번째 for문에서 대문자가 하나라도 있으면 shift키를 "1"로 추가
// 대문자가 여러개여도 shift 키는 한개로 세야 하기 때문에, "1"이 이미 배열에 있으면 추가하지 않음
function solution1(s, k) {
  let answer = true;
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      a.push(s[i]);
    }
    if (!a.includes(s[i]) && !a.includes(s[i].toUpperCase())) {
      a.push(s[i]);
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase() && !a.includes("1")) {
      a.push("1");
    }
  }
  return a.length === k ? answer : (answer = false);
}

console.log(solution1("aPplEe", 5));

// 수열의 경우 수
// 답지 참고했습니다..!!
function solution2(nums) {
  let answer = 0;
  let peak = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      peak.push(i);
    }
  }
  for (let p of peak) {
    let left = p;
    let right = p;
    let lcnt = 0;
    let rcnt = 0;
    while (left > 0 && nums[left] > nums[left - 1]) {
      lcnt++;
      left--;
    }
    while (right < nums.length - 1 && nums[right] > nums[right + 1]) {
      rcnt++;
      right++;
    }
    answer += lcnt * rcnt;
  }
  return answer;
}

console.log(solution2([1, 2, 3, 4, 5, 3, 2, 1]));

// 최댓값 위치
function solution3(nums) {
  let answer = [];
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (nums[i][j] > max) {
        max = nums[i][j];
        answer = [i + 1, j + 1];
      }
    }
  }
  return answer;
}

console.log(
  solution3([
    [3, 23, 85, 34, 17, 74, 25, 52, 65],
    [10, 7, 39, 42, 88, 52, 14, 72, 63],
    [87, 42, 18, 78, 53, 45, 18, 84, 53],
    [34, 28, 64, 85, 12, 16, 75, 36, 55],
    [21, 77, 45, 35, 28, 75, 90, 76, 1],
    [25, 87, 65, 15, 28, 11, 37, 28, 74],
    [65, 27, 75, 41, 7, 89, 78, 64, 39],
    [47, 47, 70, 45, 23, 65, 3, 41, 44],
    [87, 13, 82, 38, 31, 12, 29, 29, 80],
  ])
);
