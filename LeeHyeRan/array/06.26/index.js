// 프로그래머스 삼총사

function solution1(number) {
  let answer = 0;
  for (let x = 0; x < number.length; x++) {
    for (let y = x + 1; y < number.length; y++) {
      for (let z = y + 1; z < number.length; z++) {
        if (number[x] + number[y] + number[z] === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

console.log(solution1([-2, 3, 0, 2, -5]));
