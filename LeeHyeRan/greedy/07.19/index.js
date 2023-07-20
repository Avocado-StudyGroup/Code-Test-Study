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

// 잃어버린 괄호
// 주어진 식의 값을 괄호를 사용하여 최소값으로 만드는 문제
function solution2() {
  let nums = "55 - 50 + 40";
  let answer = Number(nums);
  return answer;
}

console.log(solution2());
