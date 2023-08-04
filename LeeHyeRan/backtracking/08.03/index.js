// 0 만들기
// 더하기, 빼기, 공백을 사용해서 0을 만들수 있는 경우의 수 출력하기
function solution(n) {
  function dfs(result, depth) {
    if (depth === n - 1) {
      let str = "";
      for (let i = 0; i < n - 1; i++) {
        str += arr[i] + result[i];
        str += arr[n - 1] + "";
        current = str.split(" ").join("");
        if (current === 0) {
          console.log(str);
        }
        return;
      }
    }
  }
}

console.log(solution(7));
