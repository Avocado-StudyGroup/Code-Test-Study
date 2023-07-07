const deleteDuplicate = (str) => {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) answer += str[i];
  }
  console.log(answer);
  return answer;
};

// test code
deleteDuplicate('ksekkset'); //'kset'
deleteDuplicate('sssssttessskssee'); //'stek'
