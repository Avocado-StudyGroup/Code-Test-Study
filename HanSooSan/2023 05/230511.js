// 공주 찾기
const solution1 = (n, k) => {
  let answer;
  let prince = [];

  // prince 배열 채우기
  for (let i = 1; i <= n; i++) {
    prince[i - 1] = i;
  }

  // prince배열에서 밑에서 하나씩 빼면서 뒤로 추가해준다 k번 전까지
  while (prince.length) {
    for (let i = 1; i < k; i++) prince.push(prince.shift());
    // k번 차례가 오면 k번을 prince에서 제외시킨다
    prince.shift();
    // 반복하다가 하나가 남았을 때 그 마저도 빼서 answer에다가 넣어준다.
    if (prince.length === 1) answer = prince.shift();
    // 이제 prince 배열의 값이 남지 않아 while문이 종료된다.
  }

  return answer;
};

console.log(solution1(8, 3));

// 최대 매출
const solution2 = (nums, k) => {
  let answer = 0;
  let sum = 0;

  // 첫 연속 3숫자 더한 값 만들어주기
  for (let i = 0; i < k; i++) sum += nums[i];
  // answer 초기화
  answer = sum;

  let lt = 0;
  for (let rt = k; rt < nums.length; rt++) {
    // 왼쪽꺼를 빼고 오른쪽꺼를 추가하면서 비교해야하니까 오 - 왼 값을 sum에 더해준다.
    sum += nums[rt] - nums[lt];
    answer = Math.max(answer, sum);
    //왼쪽 값 ++
    lt++;
  }
  return answer;
};
console.log(solution2([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
