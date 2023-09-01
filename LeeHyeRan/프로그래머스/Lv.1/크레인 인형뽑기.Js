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

function solution(board, moves) {
  let answer = 0;
  let arr = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === arr[k - 1]) {
        answer += 2;
        arr.pop();
        arr.pop();
      }
    }
  }
  return answer;
}

function solution(board, moves) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        // 배열에 추가하기 전에 조건문으로 먼저 확인
        if (stack[stack.length - 1] === board[j][moves[i] - 1]) {
          stack.pop();
          count += 2;
        } else {
          stack.push(board[j][moves[i] - 1]);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}
