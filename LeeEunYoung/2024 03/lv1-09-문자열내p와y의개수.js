function solution(str) {
  const arr = str.toUpperCase().split('');
  return (
    arr.filter((el) => el === 'P').length ===
    arr.filter((el) => el === 'Y').length
  );
}

console.log(solution('pPoooyY')); // true
console.log(solution('Pyy')); // false
