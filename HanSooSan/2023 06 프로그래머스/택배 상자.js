function solution(order) {
  let answer = 0;
  const stack = [];
  let idx = 0;

  for (let i = 1; i <= order.length; i++) {
    // 택배시가사 넣고싶은 순서와 맞는 애가 나오지 않으면 보조 벨트 stack에 넣어놓고 나오면 idx,answer ++ 
    if (order[idx] !== i) {
      stack.push(i);
    } else {
      idx++;
      answer++;
    }

    // 보조벨트에 무언가 담겼고 보조벨트 끝에서 빼서 순서를 맞출 수 있다면 빼고 idx,answer ++를 반복
    while (stack.length !== 0 && stack[stack.length - 1] === order[idx]) {
      stack.pop();
      idx++;
      answer++;
    }
  }

  return answer;
}

// 시간초과가 계속 떠서  while (stack.length !== 0 && stack[stack.length -1] === order[idx]) 는 참고했습니다.