function solution(n) {
  const arr = [];
  for (let i = 0; i < String(n).length; i++) {
    arr.push(Number(String(n)[i]));
  }
  return arr.reverse();
}
