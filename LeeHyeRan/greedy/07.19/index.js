// 거스름 돈 문제
// 카운터에 500원, 100원, 50원, 10원짜리 동전이 무수히 많이 존재
// 6,480원을 거슬러 주어야 할 때, 동전 개수의 최소값은?
function solution(nums) {
  let answer = 0;
  while (nums > 0) {
    if (nums >= 500) {
      answer += 1;
      nums = nums - 500;
    } else if (nums >= 100 && nums < 500) {
      answer += 1;
      nums = nums - 100;
    } else if (nums >= 50 && nums < 100) {
      answer += 1;
      nums = nums - 50;
    } else if (nums >= 10 && nums < 50) {
      answer += 1;
      nums = nums - 10;
    }
  }
  return answer;
}

function solution1(nums) {
  let count = 0;
  const arr = [500, 100, 50, 10, 5, 1];
  for (let item of arr) {
    count = count + Math.floor(nums / item); //동전의 개수
    nums = nums - item * Math.floor(nums / item); // 남은 돈 계산
  }
  return count;
}

console.log(solution1(6480));

// 설탕 배달
function solution2(nums) {
  let answer = 0;
  let flag = false;
  while (nums >= 0) {
    // nums가 0이거나 5로 나누어 떨어지면 나눈 몫을 구하고 flag 를 true로 변경
    if (nums === 0 || nums % 5 === 0) {
      answer += nums / 5;
      flag = true;
      break;
    }
    // 5로 나누어 떨어지지 않으면 3을 먼저 빼줌
    nums -= 3;
    answer += 1;
  }
  return flag ? answer : -1;
}

console.log(solution2(21));
