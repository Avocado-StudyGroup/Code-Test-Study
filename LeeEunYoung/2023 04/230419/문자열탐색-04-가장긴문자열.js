const findLongest = (arr) => {
  const a = arr.map((el) => el.length);
  console.log(arr[a.indexOf(Math.max(...a))]);
  return arr[a.indexOf(Math.max(...a))];
};

// test code
findLongest(['teacher', 'time', 'student', 'beautiful', 'good']); //'beautiful'
findLongest(['big', 'Good', 'easy']); //'Good'
