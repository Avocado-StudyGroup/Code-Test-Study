function solution(phone) {
  let answer = Array.from(phone);
  for (let i = 0; i < phone.length - 4; i++) {
    answer[i] = "*";
  }
  return answer.join("");
}

function solution(phone) {
  let arr = phone.split("");
  let num = "";
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4) {
      num += "*";
    } else {
      num += arr[i];
    }
  }
  return num;
}

function solution(s) {
  let result;
  return (result = "*".repeat(s.length - 4) + s.slice(-4));
}
