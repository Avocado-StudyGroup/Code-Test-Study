const solution = (numbers, hand) => {
  let answer = "";
  let left = "*";
  let right = "#";

  // 손의 위치 찾아주는 함수.
  const findHand = (num) => {
    let keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ["*", 0, "#"],
    ];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (keypad[i][j] === num) {
          return [i, j];
        }
      }
    }
  };

  numbers.forEach((v) => {
    // 1,4,7은 L
    if (v === 1 || v === 4 || v === 7) {
      answer += "L";
      left = v;
      // 3,6,9는 R
    } else if (v === 3 || v === 6 || v === 9) {
      answer += "R";
      right = v;
    } else {
      // 중간은 어느 손가락이 가까운지 찾아야함 이 부분이 핵심
      let l = findHand(left);
      let r = findHand(right);
      let m = findHand(v);

      // abs메서드를 활용하여 누가 더 가까운지 계산해내기
      let rr = Math.abs(r[0] - m[0]) + Math.abs(r[1] - m[1]);
      let ll = Math.abs(l[0] - m[0]) + Math.abs(l[1] - m[1]);

      // 차이가 없으면 주 손으로 누르기 그리고 왼,오 손가락 위치 변경해주기
      if (rr === ll) {
        if (hand === "right") (answer += "R"), (right = v);
        if (hand === "left") (answer += "L"), (left = v);
      } else if (rr > ll) {
        answer += "L";
        left = v;
      } else {
        answer += "R";
        right = v;
      }
    }
  });

  return answer;
};
