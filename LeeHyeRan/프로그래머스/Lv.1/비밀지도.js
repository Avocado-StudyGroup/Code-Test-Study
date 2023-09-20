function solution(n, arr1, arr2) {
  let answer = [];
  let map1 = [];
  let map2 = [];
  for (let i = 0; i < n; i++) {
    map1.push(arr1[i].toString(2).padStart(n, "0"));
    map2.push(arr2[i].toString(2).padStart(n, "0"));
  }
  for (let x = 0; x < n; x++) {
    let add = "";
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
