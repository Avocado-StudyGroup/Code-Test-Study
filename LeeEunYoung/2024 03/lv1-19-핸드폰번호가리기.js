function solution(phoneNum) {
  let answer = '';
  for (let i = 0; i <= phoneNum.length - 5; i++) {
    answer += '*';
  }
  for (let i = phoneNum.length - 4; i <= phoneNum.length - 1; i++) {
    answer += phoneNum.at(i);
  }
  return answer;
}

console.log(solution('01033334444')); // "*******4444"
console.log(solution('027778888')); // "*****8888"

// 다른 사람 풀이

function solution2(s) {
  return '*'.repeat(s.length - 4) + s.slice(-4);
}

function solution3(n) {
  return [...n].fill('*', 0, n.length - 4).join('');
}

// phoneNum.split('')이랑 [...phoneNum] 이랑 같음
// fill(value, start, end)
// at은 음수 매개변수를 가질 수 있고 이터러블객체를 대상으로함, chatAt은 문자열만 대상으로 하며 오래된 브라우저를 지원함
