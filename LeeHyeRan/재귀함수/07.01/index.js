//프로그래머스 모의고사
function solution(answers) {
  let answer = [];
  let score = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  // 맞춘 정답 score 반환 함수
  function repeat(answers, student) {
    let tmp = 0;
    let j = 0;
    for (let i = 0; i < answers.length; i++) {
      if (i > student.length - 1) {
        if (answers[i] === student[j]) tmp++;
        j++;
        if (j > student.length - 1) j = 0;
      } else {
        if (answers[i] === student[i]) {
          tmp++;
        }
      }
    }
    return tmp;
  }
  // 첫번째부터 세번째 학생의 번호와 점수 배열에 담아주기
  score.push([1, repeat(answers, one)]);
  score.push([2, repeat(answers, two)]);
  score.push([3, repeat(answers, three)]);
  // 점수 기준 내림차순 정렬
  score.sort((a, b) => b[1] - a[1]);

  // 최대 스코어 구하기
  let max = -1;
  for (let i = 0; i < score.length; i++) {
    if (score[i][1] > max) {
      max = score[i][1];
    }
  }
  // 최대 스코어랑 같은 점수인 학생만 answer에 push
  for (let i = 0; i < score.length; i++) {
    if (max === score[i][1]) {
      answer.push(score[i][0]);
    }
  }
  // 학생번호 오름차순
  return answer.sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
