function solution(participant, completion) {
  let answer = "";
  let com = new Map();
  for (let p of participant) {
    com.set(p, (com.get(p) || 0) + 1);
  }
  for (let c of completion) {
    com.set(c, com.get(c) - 1);
  }

  for (let i = 0; i < participant.length; i++) {
    if (com.get(participant[i]) === 1) {
      answer += participant[i];
      break;
    }
  }
  return answer;
}

function solution(participant, completion) {
  let answer = "";
  let a = participant.sort();
  let b = completion.sort();
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      answer += a[i];
      break;
    }
  }
  return answer;
}
