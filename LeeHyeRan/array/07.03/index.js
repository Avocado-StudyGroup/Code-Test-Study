// 프로그래머스 비밀지도
function solution(n, arr1, arr2) {
  let answer = [];
  let map1 = [];
  let map2 = [];
  // 이진수로 변환후 배열 설정
  for (let i = 0; i < n; i++) {
    map1.push(arr1[i].toString(2).padStart(n, "0"));
    map2.push(arr2[i].toString(2).padStart(n, "0"));
  }
  for (let x = 0; x < n; x++) {
    let add = "";
    // 벽 1을 만나면 #을 공백 0을 만나면 공백을 넣어 만들어서 answer에 넣어줌
    for (let y = 0; y < n; y++) {
      if (map1[x][y] === "1" || map2[x][y] === "1") {
        add += "#";
      } else {
        add += " ";
      }
    }
    answer.push(add);
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
