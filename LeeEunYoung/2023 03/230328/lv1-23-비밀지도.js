// - 배열 안의 배열 접근(2차원 배열) : array[0][0]
// - 연산
//     - 나누기 : `/`
//     - 몫 : `Math.floor(10/3)`
//     - 나머지 : `%`
// - [십진수를 이진수로 바꾸는 법](https://ko.wikihow.com/%EC%8B%AD%EC%A7%84%EC%88%98%EB%A5%BC-%EC%9D%B4%EC%A7%84%EC%88%98%EB%A1%9C-%EB%B0%94%EA%BE%B8%EB%8A%94-%EB%B2%95)

function solution(n, first, second) {
  // 배열 원소 하나를 이진수로 나타내기
  // toString(2)
  function toBinaryNum(n, num) {
    let newNum = num;
    let quotient = 0;
    let remainder = 0;
    let binaryArr = [];

    for (let i = 1; i <= n; i++) {
      quotient = Math.floor(newNum / 2);
      remainder = newNum % 2;
      newNum = quotient;
      binaryArr.unshift(remainder);
    }
    return binaryArr;
  }

  // 배열을 이진수로 나타내기
  let firstArr = [];
  let secondArr = [];
  for (let v = 0; v <= n - 1; v++) {
    firstArr.push(toBinaryNum(n, first[v]));
    secondArr.push(toBinaryNum(n, second[v]));
  }

  // 두 배열의 같은 자리에 있는 원소값 더하기
  // 더한 값 공백 또는 #으로 나타내기
  let decodeArr = [];
  for (let outer = 0; outer <= n - 1; outer++) {
    const row = [];
    for (let inner = 0; inner <= n - 1; inner++) {
      if (firstArr[outer][inner] + secondArr[outer][inner] >= 1) {
        row.push('#');
      } else {
        row.push(' ');
      }
    }
    decodeArr.push(row.join(''));
  }
  return decodeArr;
}
