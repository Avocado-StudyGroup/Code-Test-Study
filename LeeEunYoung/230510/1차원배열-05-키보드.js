// 키보드

const solution = (str, k) => {
  let count = str.length;

  //소문자 중복시
  for (let i = 0; i < str.length; i++) {
    for (let v = i + 1; v < str.length; v++) {
      if (str[i].toLowerCase() === str[v]) {
        count -= 1;
      }
    }
  }
  //대문자 있을시
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i].toLowerCase()) {
      count += 1;
      break;
    }
  }
  return count === k;
};

// test code
console.log(solution('teacher', 6)); //true
console.log(solution('Teacher', 6)); //false
console.log(solution('TeacHer', 7)); //true
console.log(solution('LifeisGood', 8)); //false
console.log(solution('Gabg', 4)); //true
