const solution = (numbers) => {
  let answer = 0
  let n = numbers.length;

  // 서로 겹치지 않는 3개의 숫자를 더해주는게 포인트
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 0) answer++
      }
    }
  }

  return answer;
}
