function solution(nums) {
  let answer = 0;
  // 소수인지 판별하는 함수
  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        //세개 숫자 더한 값이 소수이면 + 1
        let add = nums[i] + nums[j] + nums[k];
        if (isPrime(add)) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}
