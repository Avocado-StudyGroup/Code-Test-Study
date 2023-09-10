function solution(input_string) {
  let answer = "";
  let A = [];
  let S = input_string;
  let alone = [];
  let together = [];
  let check = [];
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1] || S[i] === S[i - 1]) {
      together.push(S[i]);
    } else {
      alone.push(S[i]);
    }
  }
  for (let k = 0; k < together.length; k++) {
    if (together[k] !== together[k + 1] && !check.includes(together[k])) {
      check.push(together[k]);
    } else if (check.includes(together[k]) && !A.includes(together[k])) {
      A.push(together[k]);
      count += 1;
    }
  }
  alone.sort();
  for (let j = 0; j < alone.length; j++) {
    if (alone[j] === alone[j + 1] && !A.includes(alone[j])) {
      A.push(alone[j]);
      count += 1;
    }
  }
  A.sort().forEach((a) => {
    answer += a;
  });
  count > 0 ? answer : (answer = "N");
  return answer;
}
