function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i - 1] === arr[i] ? undefined : answer.push(arr[i]);
  }
  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // 	[4,3]

//다른 사람 풀이 ㅜㅏ...
function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
