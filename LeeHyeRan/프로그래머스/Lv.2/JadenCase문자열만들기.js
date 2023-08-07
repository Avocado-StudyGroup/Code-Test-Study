// 런타임 에러
function solution(s) {
  let answer = "";
  let arr = s.toLowerCase().split(" ");
  answer += arr.map((x) => x[0].toUpperCase() + x.slice(1));

  return answer.replaceAll(",", " ");
}

// 재작성 코드
function solution1(s) {
  const words = s
    .split(" ")
    .map(
      (word) => word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
    );

  return words.join(" ");
}

console.log(solution("3people unFollowed me"));
