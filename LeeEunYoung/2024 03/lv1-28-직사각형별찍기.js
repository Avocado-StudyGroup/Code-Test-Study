// 첫번째 시도
function solution(str) {
  const [n, , m] = str.split('');
  let answer = [];
  for (let i = 0; i < m; i++) {
    let col = [];
    col.push('*'.repeat(n));
    answer.push(col);
    answer.push(`\n`);
  }
  return answer.join('');
}

// 답지참고
function solution2() {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (data) => {
    const n = data.split(' ');
    const a = Number(n[0]),
      b = Number(n[1]);
    const row = '*'.repeat(a);
    for (let i = 0; i < b; i++) {
      console.log(row);
    }
  });
}

console.log(solution('5 3'));
// *****
// *****
// *****
