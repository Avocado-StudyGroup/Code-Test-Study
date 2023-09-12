function solution(answers) {
  let answer = [];
  let score = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
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

  score.push([1, repeat(answers, one)]);
  score.push([2, repeat(answers, two)]);
  score.push([3, repeat(answers, three)]);
  score.sort((a, b) => b[1] - a[1]);
  let max = -1;
  for (let i = 0; i < score.length; i++) {
    if (score[i][1] > max) {
      max = score[i][1];
    }
  }
  for (let i = 0; i < score.length; i++) {
    if (max === score[i][1]) {
      answer.push(score[i][0]);
    }
  }
  return answer.sort((a, b) => a - b);
}

function check(a, b) {
  let num = 0;
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[j]) {
      num += 1;
    }
    if (j >= b.length - 1) {
      j = 0;
    } else {
      j += 1;
    }
  }
  return num;
}

function solution(answers) {
  let answer = [];
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let max = 0;
  let numA = check(answers, one);
  let numB = check(answers, two);
  let numC = check(answers, three);
  max = Math.max(numA, numB, numC);
  if (max === numA) {
    answer.push(1);
  }
  if (max === numB) {
    answer.push(2);
  }
  if (max === numC) {
    answer.push(3);
  }
  return answer.sort((a, b) => a - b);
}
