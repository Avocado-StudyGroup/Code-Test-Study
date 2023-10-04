function solution(s) {
  let answer = true;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return (answer = false);
    }
  }
  arr.length === 4 || arr.length === 6 ? answer : (answer = false);
  return answer;
}
