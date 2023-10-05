function solution(seoul) {
  let num;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      num = i;
    }
  }
  return "김서방은 " + String(num) + "에 있다";
}

function solution(seoul) {
  let index = 0;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") index = i;
  }
  return `김서방은 ${index}에 있다`;
}

function solution(seoul) {
  let idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}
