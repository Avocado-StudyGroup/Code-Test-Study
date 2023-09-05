function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;
  // 없는 숫자를 필터링하고 더해줌
  let newArr = arr
    .filter((el) => !numbers.includes(el))
    .forEach((el) => {
      answer += el;
    });
  return answer;
}

function solution(numbers) {
  let answer = 0;
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 모든 숫자를 더해준 뒤 numbers에 있는 숫자들을 빼줌
  arr.forEach((num) => (answer += num));
  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }
  return answer;
}
