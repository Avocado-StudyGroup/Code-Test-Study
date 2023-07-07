//프로그래머스 완주하지 못한 선수
function solution(participant, completion) {
  let answer = "";
  let com = new Map();
  // 참가자, 동명이인 수 합해서 설정
  for (let p of participant) {
    com.set(p, (com.get(p) || 0) + 1);
  }
  // 완주자는 마이너스
  for (let c of completion) {
    com.set(c, com.get(c) - 1);
  }
  // 완주하지 못한 1명 answer에 넣어줌
  for (let i = 0; i < participant.length; i++) {
    if (com.get(participant[i]) === 1) {
      answer += participant[i];
      break;
    }
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
