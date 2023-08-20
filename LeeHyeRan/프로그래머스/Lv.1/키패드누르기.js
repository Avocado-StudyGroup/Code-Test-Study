function solution(numbers, hand) {
  let answer = "";
  let left = 10;
  let right = 12;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == 0) {
      // 0
      numbers[i] = 11;
    }
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      left = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      right = numbers[i];
    } else {
      var L = 0; // 현재 왼손이 위치한 숫자 키패드
      var R = 0; // 현재 오른손이 위치한 숫자 키패드

      // 왼손이 좌측에 위치해있다면
      if (left == 1 || left == 4 || left == 7 || left == 10) {
        L = Math.abs((numbers[i] - (left + 1)) / 3) + 1;
      }
      // 왼손이 가운데 위치해있다면
      else {
        // 2 5 8 0(11)
        L = Math.abs((numbers[i] - left) / 3);
      }

      // 오른이 좌측에 위치해있다면
      if (right == 3 || right == 6 || right == 9 || right == 12) {
        R = Math.abs((numbers[i] - (right - 1)) / 3) + 1;
      }
      // 오른손이 가운데 위치해있다면
      else {
        // 2 5 8 0(11)
        R = Math.abs((numbers[i] - right) / 3);
      }

      // 거리가 같다면
      if (L == R) {
        if (hand == "right") {
          answer += "R";
          right = numbers[i];
        } else if (hand == "left") {
          answer += "L";
          left = numbers[i];
        }
      } else if (L < R) {
        // 왼손이 가깝다면
        answer += "L";
        left = numbers[i];
      } else if (L > R) {
        // 오른손이 가깝다면
        answer += "R";
        right = numbers[i];
      }
    }
  }
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
