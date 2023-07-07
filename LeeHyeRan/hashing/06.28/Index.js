// 프로그래머스 신고결과받기
function solution(id_list, report, k) {
  let answer = [];
  // set으로 중복 신고값 제외 후 유저 id, 신고 id 분리
  let reports = [...new Set(report)].map((el) => el.split(" "));
  // 신고당한 id map
  let reportId = new Map();
  // 메일받을 횟수 map
  let mail = new Map();
  // 신고당한 횟수 더해주기
  for ([, report] of reports) {
    reportId.set(report, (reportId.get(report) || 0) + 1);
  }
  // 메일발송 횟수 더해주기
  for ([user, report] of reports) {
    if (reportId.get(report) >= k) {
      mail.set(user, (mail.get(user) || 0) + 1);
    }
  }
  // 메일 발송 배열, 없으면 0으로 설정
  answer = id_list.map((id) => mail.get(id) || 0);
  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
