// 카드 가져가기
const solution1 = (nums, k) => {
  let answer = 0;
  let sort;
  let arr = [];

  sort = nums.sort((a, b) => b - a);
  for (let i = 1; i < nums.length; i += 2) {
    // 일단 후 순위로 하나하나 카드를 선택해 추가한다.
    answer += sort[i];
    // 우선권을 써야하기 때문에 손해본 점수를 체크한다
    arr.push(sort[i - 1] - sort[i]);
  }

  // 손해본 점수중 높은 숫자를 추가 해줘야 하기 때문에 손해본 점수도 sort 해준다
  arr.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    // 손해본 점수중 가장 큰 점수를 k번 추가해준다 (우선권 사용)
    answer += arr[i];
  }

  return answer;
};

console.log(solution1([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2));

// 이진수 정렬
const solution2 = (nums) => {
  let answer = [];
  let len = [];

  for (let x of nums) {
    let cnt = 0;
    let num = x;

    while (num > 0) {
      // 1 인 갯수를 카운트 하는 방법
      cnt += num % 2;
      // 계속 카운트 하지 않도록 반씩 나눠줌
      num = parseInt(num / 2);
    }
    // 1의 갯수와 nums번호 매칭된 배열 생성
    len.push([x, cnt]);
  }

  // 매칭된 배열을 sort해준다
  len.sort((a, b) => a[1] - b[1]);

  // 1의 개수가 같은 숫자는 오름차순 해줘야 하는데 해주는 방법을 몰라 일단 반복문에 넣음 ...
  // 1의 개수가 달라질 때 까지는 arr배열에 임시로 보관하고 달라질 때 arr를 sort해서 그대로 push 해주고 초기화
  let num = 0;
  let arr = [];

  for (let i = 0; i < len.length; i++) {
    let sum = len[i][1];
    arr.push(len[i][0]);
    if (num !== sum) {
      arr.sort((a, b) => a - b);
      answer.push(...arr);
      arr = [];
    }
  }

  return answer;
};

console.log(solution2([5, 6, 7, 8, 9]));
