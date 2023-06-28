// 프로그래머스 크레인 인형뽑기
// 통과를 못해서 다시 풀어야 합니다! ㅠ_ㅠ
function solution(board, moves) {
  let answer = 0;
  let array = [];
  let len = Array.from({ length: board.length }, (v, i) => i + 1);
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < moves.length; j++) {
      for (let k = 0; k < moves.length; k++) {
        if (moves[i] === j + 1 && board[k][i] !== 0) {
          array.push(board[k][i]);
          board[k][i] = 0;
          break;
        }
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[j + 1]) {
        answer += 2;
        array.splice(j, 2);
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
