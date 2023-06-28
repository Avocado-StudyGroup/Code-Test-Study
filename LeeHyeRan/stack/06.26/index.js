// 프로그래머스 햄버거 만들기

function solution(ingredient) {
  let answer = 0;
  let burger = [];
  for (let i = 0; i < ingredient.length; i++) {
    // 순서대로 하나씩 재료를 넣어봄
    burger.push(ingredient[i]);
    // 순서대로 넣다가 4개가 1231 일경우
    // answer 카운트 후 잘라냄
    if (burger.slice(-4).join("") === "1231") {
      answer++;
      burger.splice(-4);
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1, 2]));
