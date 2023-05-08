// 키보드
// 첫번째 for문에서 대문자먼저 a배열에 추가, 중복된 문자가 없으면 a배열에 추가
// 두번째 for문에서 대문자가 하나라도 있으면 shift키를 "1"로 추가
// 대문자가 여러개여도 shift 키는 한개로 세야 하기 때문에, "1"이 이미 배열에 있으면 추가하지 않음
function solution1(s, k) {
  let answer = true;
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      a.push(s[i]);
    }
    if (!a.includes(s[i]) && !a.includes(s[i].toUpperCase())) {
      a.push(s[i]);
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase() && !a.includes("1")) {
      a.push("1");
    }
  }
  console.log(a);
  return a.length === k ? answer : (answer = false);
}

console.log(solution1("aPplEe", 5));
