const solution = (n, m) => {
  let answer = [];
  let tmp = [];

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp.push(i);
        DFS(L + 1);
        tmp.pop();
      }
    }
  };

  DFS(0);
  return answer;
};

console.log(solution(3, 2));

const solution1 = (nums, m) => {
  let answer = [];
  let n = nums.length;
  let tmp = [];
  let ch = Array.from({ length: n }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp.push(nums[i]);
          DFS(L + 1);
          ch[i] = 0;
          tmp.pop();
        }
      }
    }
  };
  DFS(0);
  return answer;
};
// check 배열이 들어가면 수열 없으면 중복수열

console.log(solution1([3, 6, 9], 2));

//피로도
const solution2 = (k, dungeons) => {
  let answer = 0;
  let n = dungeons.length;
  let ch = Array.from({ length: n }, () => 0);

  const DFS = (hp, L) => {
    for (let i = 0; i < n; i++) {
      if (!ch[i] && dungeons[i][0] <= hp) {
        ch[i] = 1;
        DFS(hp - dungeons[i][1], L + 1);
        ch[i] = 0;
      }
    }
    answer = Math.max(answer, L);
  };

  DFS(k, 0);

  return answer;
};

console.log(
  solution2(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
// 한 번씩만 돌 수 있는 던전이기 때문에 순열 문제 방식으로 해결해야함.
