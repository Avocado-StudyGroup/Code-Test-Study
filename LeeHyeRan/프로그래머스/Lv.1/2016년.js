function solution(a, b) {
  let answer = "";
  let day = "";
  if (a.length === 2) {
    day = "2016-" + a + "-" + b;
  } else {
    day = "2016-0" + a + "-" + b;
  }
  day = new Date(day).getDay();
  day === 0
    ? (answer = "SUN")
    : day === 1
    ? (answer = "MON")
    : day === 2
    ? (answer = "TUE")
    : day === 3
    ? (answer = "WED")
    : day === 4
    ? (answer = "THU")
    : day === 5
    ? (answer = "FRI")
    : day === 6
    ? (answer = "SAT")
    : null;
  return answer;
}

function solution(a, b) {
  const monthDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const weekDay = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let days = b;
  for (let i = 0; i < a - 1; i++) days += monthDay[i];

  return weekDay[days % 7];
}

// 시간 효율성 좋지 않음
function solution(a, b) {
  let arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let date = new Date(`2016-${a}-${b}`);
  let day = date.getDay();
  return arr[day];
}
