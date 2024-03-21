// 최대공약수 구하가
// 1.n의 약수 구하기[1,3], m의 약수 구하기 [1,2,3,4,6,12]
// 2.n의 약수와 m의 약수 중 겹치는 것 찾기
// 3.그 중 제일 큰 수 찾기

// 첫번째 시도 : 시간초과 실패
function solution(n, m) {
  // 최대공약수
  let nArr = [];
  let mArr = [];
  let maxNumber = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? nArr.push(i) : undefined;
  }
  for (let i = 1; i <= m; i++) {
    m % i === 0 ? mArr.push(i) : undefined;
  }
  for (let i = 0; i <= mArr.length; i++) {
    maxNumber.push(nArr.filter((el) => el === mArr[i]));
  }

  // 최소공배수;
  let nArr2 = [];
  let mArr2 = [];
  let minNumber = [];
  for (let i = 1; i <= n * m; i++) {
    nArr2.push(i * n);
    mArr2.push(i * m);
  }

  for (let i = 0; i <= mArr2.length; i++) {
    minNumber.push(...nArr2.filter((el) => el === mArr2[i]));
  }

  return [Math.max(...maxNumber), Math.min(...minNumber)];
}

// 다른 사람 풀이 : 유클리드 호제법
// for문 첫번째는 초기화, 두번째는 조건문, 반복문 마지막에 실행
// 조건문이 0 이 나오면 for 문 종료
// let, const로 쓰려면 for문 이전에 미리 할당해야함
function gcdlcm(a, b) {
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1,10]
