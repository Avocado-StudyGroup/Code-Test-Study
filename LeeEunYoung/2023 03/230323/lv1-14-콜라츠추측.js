// 초기 풀이
function solution(num) {
  let count = 0,
    value = num;

  // 묶어서
  // while(value !== 1 && count < 500)
  if (value === 1) return 0;

  while (count < 500) {
    // 삼항연산자
    // value % 2 === 0 ? value = value / 2 : value = value * 3 + 1;
    if (value % 2 === 0) {
      value = value / 2;
    } else {
      value = value * 3 + 1;
    }

    count++;

    // 삼항연산자
    // return num == 1 ? answer : -1;
    if (value === 1) break;
    if (count >= 500) return -1;
  }
  return count;
}

// 리팩토링

function solution(num) {
  let count = 0;

  while (num !== 1 && count < 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return num === 1 ? count : -1;
}
