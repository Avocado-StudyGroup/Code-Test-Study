const findCapital = (str) => {
  const strArr = str
    .split('')
    .filter((el) => el.charCodeAt() >= 65 && el.charCodeAt() <= 90).length;
  console.log(strArr);
  return strArr;
};

// test code
findCapital('KoreaTimeGood'); //3
findCapital('IT IS TIME TO GO'); //12
findCapital('Teacher is My friEnd'); //3
