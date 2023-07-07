const solution = (str) => {
  let answer = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count += 1;
    } else {
      answer += str[i];
      count !== 1 ? (answer += count) : null;
      count = 1;
    }
  }
  console.log(answer);
  return answer;
};

// test code
solution('KKHSSSSSSSE'); //'K2HS7E'
solution('AAABCCCDD'); //'A2BC3D2'
