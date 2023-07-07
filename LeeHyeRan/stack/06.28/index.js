// 프로그래머스 크레인 인형뽑기
function solution(board, moves) {
  let answer = 0;
  let array = [];
  for (let i = 0; i < moves.length; i++) {
    let m = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][m] !== 0) {
        array.push(board[j][m]);
        board[j][m] = 0;
        for (let k = 0; k < array.length; k++) {
          if (array[k - 1] === array[k]) {
            answer += 2;
            array.pop();
            array.pop();
          }
        }
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
