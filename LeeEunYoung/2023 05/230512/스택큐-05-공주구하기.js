// 공주구하기

// 문제를 다른 말로 하면 아래와 같음
// 길이가 N개인 배열에서 0번째 인덱스부터 M번째 떨어진 숫자를 배열내에
// 한 개의 숫자가 남을때까지 반복해서 제거한다고 했을때 최종적으로 남을 단 하나의 숫자는 무엇인가?

// 문제 나누기
// 1.n개의 길이 만큼의 배열 생성
// 2.한 개의 숫자가 남을 때까지 반복 제거
// 2.1 반복문 사용(조건은 배열 길이가 0이 아닐 때)
// 2.2 제거(k번째 이전 원소들은 FIFO하고, k번째 원소는 삭제함)

const solution = (n, k) => {
  let answer;
  // 배열 생성 / 길이가 n개인 / 1부터 시작하는 개별 원소
  let queue = Array.from({ length: n }, (v, i) => i + 1);

  //queue에 아무것도 없을 때까지 순회
  while (queue.length) {
    //queue.shift() : 배열의 첫번째 원소를 반환하면서, 해당 원소를 배열에서 제거
    //queue.push(queue.shift()) 를 사용하여, k번째 이전 원소들은 제거하여 배열 맨 뒤로 이동
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    //k번째 원소 제거
    queue.shift();
    //최종적으로 남은 원소
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
};

// test code
console.log(solution(8, 3)); //7
