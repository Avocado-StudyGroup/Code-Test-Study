const solution = (str) => {
  let answer = '';
  let compareArr = [];
  const convertStr = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    convertStr[i] === convertStr[str.length - i - 1]
      ? compareArr.push(true)
      : compareArr.push(false);
  }

  compareArr.includes(false) ? (answer = 'NO') : (answer = 'YES');
  console.log(answer);
  return answer;
};

// test code
solution('gooG'); //'YES'
solution('Moon'); //'NO'
