// 마구간 (이분 검색)
const solution = (nums, c) => {
  nums.sort((a, b) => a - b);

  let answer = 0;
  let left = 1;
  let right = nums[nums.length - 1];

  const Count = (mid) => {
    let cnt = 1;
    let ep = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - ep >= mid) {
        cnt++;
        ep = nums[i];
      }
    }

    return cnt;
  };

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (Count(mid) >= c) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
};

console.log(solution([1, 2, 8, 4, 9], 3));
// 이분 검색으로 정렬된 값에서 특정 값을 찾는다.
// 1. 배열을 정렬한다 = nums.sort((a,b) => a - b)
// 2. 검색 범위의 시작과 끝 인덱스를 설정한다. = left = 0, right = nums[nums.length - 1];
// 3. 중간 인덱스를 계산한다 = let mid = parseInt((left + right) / 2);
// 4. 중간 값이 찾고자 하는 값을 비교한다. const Count = (mid) = {}
// 5. 매개변수 c 보다 크거나 같을시 answer를 mid 로 바꿔주고 left를 mid + 1 그리고 아닐시에는 right 를 mid -1 로 바꾸면서 while 문을 종료한다.

// 타이타닉 (greedy)
const solution1 = (nums, m) => {
  let answer = 0;
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] + nums[right] <= m) {
      answer++;
      left++;
      right--;
    } else {
      answer++;
      right--;
    }
  }

  return answer;
};
// 정렬 후 left + right 가 m을 넘지 않는다면 left와 right를 올려주고
// 아니라면 right 만 올려서 answer를 추가해준다.
// 두명만 탈 수 있기 때문에 가능한 방법이며, 여러명 올릴 수 있다는 문제는 안 나온다 제한사항 잘 확인하자.

console.log(solution1([90, 50, 70, 100, 60], 140));

// 선긋기
const solution2 = (nums) => {
  let answer = 0;
  nums.sort((a, b) => a[0] - b[0]);
  let s = nums[0][0];
  let e = nums[0][1];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i][0] <= e && nums[i][1] > e) {
      e = nums[i][1];
    } else if (nums[i][0] > e) {
      answer += e - s;
      s = nums[i][0];
      e = nums[i][1];
    }
  }
  answer += e - s; // 마지막 것도 추가
  return answer;
};

console.log(
  solution2([
    [5, 6],
    [1, 3],
    [7, 8],
    [9, 10],
  ])
);

// 그리디 알고리즘은 지금 당장 최선의 선택을 하는 기법
// 마지막점 - 시작점 한 값을 answer에 추가하는데 겹친 부분을 제외해야 한다.
// 겹친 부분을 확인하기 위해 겹친다면 endpoint만 갱신해준다.
// 겹치지 않는다면 지금까지 갱신된 마지막점 - 시작점을 answer에 추가 후 startpoint와 endpoint를 갱신한다.
