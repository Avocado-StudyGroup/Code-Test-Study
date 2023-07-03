// 프로그래머스 K번째수
function solution(array, commands) {
  let answer = [];
  let tmp = [];

  for (let i = 0; i < commands.length; i++) {
    let num = 0;
    // commands의 첫번째부터 두번째 숫자번째까지 tmp 배열에 푸시
    for (let j = 0; j < array.length; j++) {
      if (j + 1 >= commands[i][0] && j + 1 <= commands[i][1]) {
        tmp.push(array[j]);
      }
    }
    // 배열에 담긴 내용을 오름차순 정렬 후
    tmp.sort((a, b) => a - b);
    // commands의 세번째 번호를 num에 설정
    num = commands[i][2] - 1;
    // answer에 num번째 숫자를 넣어줌
    answer.push(tmp[num]);
    // tmp 배열 초기화
    tmp = [];
  }
  return answer;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
