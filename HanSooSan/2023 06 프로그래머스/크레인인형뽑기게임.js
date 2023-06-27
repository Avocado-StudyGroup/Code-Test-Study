const solution = (board, moves) => {
  let tempArr = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // 쭉 돌다가 인형을 만나면 그 인형을 빼내고 임시 배열에 추가한다
      if (board[j][moves[i] - 1] > 0) {
        let temp = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;

        tempArr.push(temp);
        // 같은 인형이 겹쳤을 경우 두개 삭제해준다.
        for (let k = 0; k < tempArr.length; k++) {
          if (tempArr[k] === tempArr[k - 1]) {
            answer += 2;
            tempArr.pop();
            tempArr.pop();
          }
        }
        break;
      }
    }
  }

  return answer;
};
