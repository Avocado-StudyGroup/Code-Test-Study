// 키보드
// set 활용 풀이
const solution1 = (s, k) => {
  let keyLen = 0;
  let key = new Set();
  let shift = false;
  for (let x of s) {
    key.add(x.toUpperCase());
    if (x === x.toUpperCase()) shift = true;
  }
  if (shift) keyLen++;
  keyLen += key.size;
  return keyLen <= k;
};
console.log(solution1("TeacHer", 7));
// set을 활용해 쓰이는 key의 갯수를 파악 (대소문자 통일)
// shift 변수를 활용해 shift가 쓰이는지 확인 쓰인다면 keyLen 하나 올림
// set에 들어간 key 갯수를 keyLen에 추가하여 k와 비교

// 배열 활용 풀이
const solution2 = (s, k) => {
  let keyLen = 0;
  let key = [];

  for (let x of s) {
    if (!key.includes(x.toUpperCase())) key.push(x.toUpperCase())
    if (keyLen === 0 && x === x.toUpperCase()) keyLen++
  }

  keyLen += key.length
  return keyLen <= k
}
console.log(solution1("TeacHer", 7))
// key배열에 해당 키가 없을 경우에만 push (set과 마찬가지로 대소문자 통일)
// shift가 쓰이는지를 구분짓기위해 대문자가 있을 경우 또 keyLen이 아직 0일 경우에만 하나 추가
// 마지막으로 key배열의 길이를 더해주고 k와 비교


// 수열의 경우수
const solution3 = (nums) => {
  let answer = 0;
  let top = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) top.push(i);
  }

  for (let x of top) {
    let lt = x;
    let rt = x;
    let lcnt = 0;
    let rcnt = 0;
    while (lt > 0 && nums[lt] > nums[lt - 1]) {
      lcnt++;
      lt--;
    }
    while (rt < nums.length - 1 && nums[rt] > nums[rt + 1]) {
      rcnt++;
      rt++;
    }
    answer += lcnt * rcnt;
  }
  return answer;
};
console.log(solution3([1, 2, 3, 4, 5, 3, 2, 1]));
// top 배열에 봉우리 (양 옆이 작은) 숫자 인덱스 번호를 추가
// 그 인덱스에서 왼쪽 오른쪽으로 이동하며 횟수를 카운트
// 왼 카운트 * 오 카운트 + 1 (봉우리 숫자) 하여 하나의 봉우리에 나올 수 있는 수열의 경우의 수 파악
// 모든 경우의 수를 합쳐줌

// 최대값 위치
const solution4 = (nums) => {
  let answer = [];
  let n = nums.length;
  let maxNum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nums[i][j] > maxNum) {
        answer = [i + 1, j + 1]
        maxNum = nums[i][j]
      }
    }
  }

  return answer;
}

console.log(solution4([
  [3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 35, 28, 75, 90, 76, 1],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 65, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80]
]))

// 이중 포문으로 하나씩 돌면서 answer과 maxNum을 업데이트 해준다.
// 행과 열이 1행 1열로 시작하기에 answer에 넣을 때에는 1씩 추가해준다.

const solution5 = (nums) => {
  let answer = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let maxNum = 0;
    for (let j = 0; j < n; j++) {
      if (nums[i][j] > maxNum) maxNum = nums[i][j]
    }
    answer.push(maxNum)
  }

  return answer;
}

console.log(solution5(
  [[3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 35, 28, 75, 90, 76, 1],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 65, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80]]
))

// 이중 for문 돌면서 각 행에서 maxNum을 업데이트 해주고 행이 바뀔 때 answer에 maxNum을 넣어준다.
// 행이 바뀌면 maxNum을 초기화하고 반복한다.

// 각 열의 최대값
const solution6 = (nums) => {
  let answer = []
  let n = nums.length

  for (let i = 0; i < n; i++) {
    let maxNum = 0
    for (let j = 0; j < n; j++) {
      if (maxNum < nums[j][i]) maxNum = nums[j][i]
    }
    answer.push(maxNum)
  }

  return answer;
}

console.log(solution6(
  [[3, 23, 85, 34, 17, 74, 25, 52, 65],
  [10, 7, 39, 42, 88, 52, 14, 72, 63],
  [87, 42, 18, 78, 53, 45, 18, 84, 53],
  [34, 28, 64, 85, 12, 16, 75, 36, 55],
  [21, 77, 45, 35, 28, 75, 90, 76, 1],
  [25, 87, 65, 15, 28, 11, 37, 28, 74],
  [65, 27, 75, 41, 7, 89, 78, 64, 39],
  [47, 47, 70, 45, 23, 65, 3, 41, 44],
  [87, 13, 82, 38, 31, 12, 29, 29, 80]
  ]))

  // 각 행의 최대값 반대로
