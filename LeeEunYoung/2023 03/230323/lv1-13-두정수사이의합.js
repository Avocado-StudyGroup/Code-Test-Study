// Math.min(a, b) Math.max(a, b)

function solution(a, b) {
  let smNum;
  let bgNum;
  if (a > b) {
    bgNum = a;
    smNum = b;
  } else {
    bgNum = b;
    smNum = a;
  }

  let arr = []; // 왜 써놓은 건지?
  let sum = 0;
  for (let i = smNum; i <= bgNum; i++) {
    sum += i;
  }
  return sum;
}
