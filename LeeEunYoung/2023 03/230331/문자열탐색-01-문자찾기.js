const findString = (str, char) => {
  const strArr = str.split('').filter((el) => el === char).length;
  console.log(strArr);
  return strArr;
};

// test code
findString('COMPUTERPROGRAMMING', 'R');
findString('IT IS TIME TO GO', 'E');
findString('TEACHER', 'E');
