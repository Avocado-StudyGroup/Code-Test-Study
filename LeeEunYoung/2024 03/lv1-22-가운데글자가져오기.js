function solution(str) {
  const strIndex = Math.ceil(str.length / 2);

  return str.length % 2 === 0
    ? str.slice(strIndex - 1, strIndex + 1)
    : str[strIndex - 1];
}

console.log(solution('abcde')); // 'c'
console.log(solution('qwer')); // 'we'
console.log(solution('apple')); // 'p'
console.log(solution('banana')); // 'na'
