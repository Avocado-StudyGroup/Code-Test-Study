// 프로그래머스 택배상자
function solution(order) {
  let answer = 0;
  let stack = [];
  let num = 0;

  // 보조 컨테이너에 넣어줌
  for (let i = 1; i <= order.length; i++) {
    if (order[num] !== i) {
      stack.push(i);
    } else {
      num++;
      answer++;
    }
    // 보조컨테이너에 상자가 있고, stack의 마지막 요소가 order의 다음 요소와 같을때
    while (stack.length !== 0 && stack.at(-1) === order[num]) {
      stack.pop();
      num++;
      answer++;
    }
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
