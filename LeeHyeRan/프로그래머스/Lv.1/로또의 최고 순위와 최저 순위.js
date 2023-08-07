// 나의 풀이
function solution(lottos, win_nums) {
  let answer = [];
  // 정답 배열 설정
  let cor = lottos.filter((num) => win_nums.includes(num));
  // 0의 개수 배열로 설정
  let non = lottos.filter((num) => num === 0);
  let win = 0;
  let fail = 0;
  // 맞춘 갯수가 0이거나 1일때 0으로 모르는 개수가 0일때 최저 순위 6으로 설정
  if (cor.length === 0 || (cor.length === 1 && non.length !== 0)) fail = 6;
  // 모르는 갯수가 전부이거나 맞춘 갯수가 전부일때 최고 순위 1로 설정
  if (non.length === 6 || cor.length === 6) win = 1;
  if (cor.length === 6) fail = 1;
  else if (cor.length === 5) fail = 2;
  else if (cor.length === 4) fail = 3;
  else if (cor.length === 3) fail = 4;
  else if (cor.length === 2) fail = 5;
  if (cor.length + non.length === 6) win = 1;
  else if (cor.length + non.length === 5) win = 2;
  else if (cor.length + non.length === 4) win = 3;
  else if (cor.length + non.length === 3) win = 4;
  else if (cor.length + non.length === 2) win = 5;
  else win = 6;
  return (answer = [win, fail]);
}

// 다른 사람 풀이
function solution1(lottos, win_nums) {
  const answer = [];
  // 현재 길이에서 맞은 갯수 최소값 설정
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  // 0의 개수와 최소값 더해주어 최대값 설정
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
