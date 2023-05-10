const changeString = (str) => {
  let strArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
      strArr.push(str[i].toLowerCase());
    } else {
      strArr.push(str[i].toUpperCase());
    }
  }
  console.log(strArr.join(''));
  return strArr.join('');
};

// test code
changeString('StuDY'); //sTUdy
changeString('TeachER'); //tEACHer
changeString('Good'); //gOOD
