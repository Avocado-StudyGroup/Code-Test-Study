const solution = (id_list, report, k) => {
  let answer = new Array(id_list.length);
  answer.fill(0);

  let report_list = {};

  // 신고받은 사람 : [신고한 사람 리스트]
  id_list.forEach((v) => {
    report_list[v] = [];
  });

  report.forEach((v) => {
    v = v.split(" ");
    // 중복 신고는 한 차례 신고로 표시되므로 없을 때만 추가
    if (!report_list[v[1]].includes(v[0])) report_list[v[1]].push(v[0]);
  });

  // 신고 받은 횟수가 k회 이상인 사용자를 신고한 사람에게 각각 알람을 보낸다.
  for (const key in report_list) {
    if (report_list[key].length >= k) {
      report_list[key].forEach((v) => {
        answer[id_list.indexOf(v)] += 1;
      });
    }
  }

  return answer;
};
