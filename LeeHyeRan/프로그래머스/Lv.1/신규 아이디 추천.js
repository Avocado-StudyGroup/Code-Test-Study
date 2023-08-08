function solution(new_id) {
  // 알파벳, 숫자, ., _, - 에 해당하는 정규 표현식
  const regex = /[^a-zA-Z0-9\-_.]/g;
  // 중복되는 . 마침표에 대한 정규 표현식
  const dotRegex = /\.{2,}/g;
  let answer = "";
  // 소문자 처리, regex 제외 문자는 제거, dotRegex에 해당되는 중복 마침표 한개로 변경
  let recom = new_id.toLowerCase().replace(regex, "").replace(dotRegex, ".");
  // 첫번째 마지막 문자가 마침표일때 제거
  if (recom[0] === ".") {
    recom = recom.substring(1);
  }
  if (recom[recom.length - 1] === ".") {
    recom = recom.substring(0, recom.length - 1);
  }
  // 빈문자열일때 a 추가
  if (recom.length === 0) {
    recom += "a";
  }
  // 길이가 16자 이상일때 15자 이하로 줄여줌
  if (recom.length >= 16) {
    recom = recom.substring(0, 15);
  }
  // 다시 마지막 문자가 마침표일때 제거 처리
  if (recom[recom.length - 1] === ".") {
    recom = recom.substring(0, recom.length - 1);
  }
  // 문자 길이가 3보다 작을때 3이상이 될때까지 마지막 문자 더해줌
  while (recom.length < 3) {
    recom += recom[recom.length - 1];
  }
  return (answer = recom);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));

// 다른 사람 풀이
const solution = (new_id) => {
  const id = new_id
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
