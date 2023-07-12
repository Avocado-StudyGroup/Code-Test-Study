//프로그래머스 주차 요금 계산
// 다른 사람 풀이 참고했습니다..!
const timeToMin = (time) => {
  let words = time.split(":");
  return Number(words[0]) * 60 + Number(words[1]);
};

function solution(fees, records) {
  // 배열로 수정 및 차량 번호로 정렬
  records = records.map((v) => v.split(" ")).sort((a, b) => a[1] - b[1]);
  // 유일한 차량번호 배열 생성
  const uniqueCars = [...new Set(records.map((v) => v[1]))];

  // 차량번호별 입출차 배열 생성 (입출차 수가 홀수면 뒤에 23:59 push)
  const result = uniqueCars.map((v) => {
    const arr = [];
    for (let i = 0; i < records.length; i++) {
      if (v === records[i][1]) {
        arr.push(records[i]);
      }
    }
    if (arr.length % 2 === 1) {
      return [...arr, ["23:59", v, "OUT"]];
    } else {
      return arr;
    }
  });
  // [총 시간(minute)] answer배열 초기화
  const answer = result.map((v) => {
    let minute = 0;
    for (let i = 0; i < v.length; i += 2) {
      const time = timeToMin(v[i + 1][0]) - timeToMin(v[i][0]);
      minute += time;
    }

    return minute;
  });
  // 차량 번호별 정렬 후 금액 계산 후 return
  return answer.map((v) => {
    let price = 0;
    if (v > fees[0]) {
      return fees[1] + Math.ceil((v - fees[0]) / fees[2]) * fees[3];
    } else {
      return fees[1];
    }
  });
}
