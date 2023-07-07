const solution = (s) => {
  const strArr = Array.from(s.toLowerCase());
  let findP = 0;
  let findY = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'p') findP += 1;
    if (strArr[i] === 'y') findY += 1;
  }

  return findP === findY ? true : false;
};
