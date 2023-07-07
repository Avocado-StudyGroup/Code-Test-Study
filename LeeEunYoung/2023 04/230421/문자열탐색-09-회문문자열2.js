const solution = (str) => {
  let answer = '';
  let compareAnswer = [];
  const arrayStr = str.split('');

  for (let v = 0; v < str.length; v++) {
    // 한글자 지워진 string
    filterStr = arrayStr.filter((el) => el !== arrayStr[v]);

    // 한글자씩 비교해서 결과를 compareChar 배열에 추가
    let char = '';
    let compareChar = [];
    for (let i = 0; i < filterStr.length; i++) {
      filterStr[i] === filterStr[filterStr.length - i - 1]
        ? compareChar.push(true)
        : compareChar.push(false);
    }

    // 한문자를 비교해서 결과를 compareAnswer 배열에 추가
    compareChar.includes(false)
      ? compareAnswer.push(false)
      : compareAnswer.push(true);
  }

  compareAnswer.includes(true) ? (answer = 'YES') : (answer = 'NO');

  console.log(answer);
  return answer;
};

// test code
solution('abcbdcba'); //'YES'
solution('abcabbakcba'); //'YES'
solution('abcacbakcba'); //'NO'
