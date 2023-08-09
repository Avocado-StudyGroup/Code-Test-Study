function solution(s) {
  let answer = 0;
  let strArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 10번을 돌며 해당되는 문자가 있을 시 숫자로 변환
  for (let i = 0; i <= 9; i++) {
    s = s.replaceAll(strArr[i], numArr[i]);
  }
  // 문자열을 숫자로 변환
  answer = Number(s);
  return answer;
}
