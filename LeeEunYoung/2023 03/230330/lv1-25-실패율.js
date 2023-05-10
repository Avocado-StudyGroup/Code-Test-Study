// 미완성

function solution(N, stages) {
  let newArr = [];
  let a = [];
  let b = [];
  for (let i = 0; i <= N; i++) {
    newArr = stages.filter((element) => element === i);
    a.push(newArr.length);
    b.push(stages.length - a[i - 1]);
  }
}
