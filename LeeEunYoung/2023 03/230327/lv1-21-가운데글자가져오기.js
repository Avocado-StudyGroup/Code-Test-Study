function solution(s) {
  const strLength = s.length;
  if (strLength >= 1 && strLength <= 100) {
    if (strLength % 2 !== 0) {
      return s[Math.ceil(strLength / 2) - 1];
    } else {
      return s.substring(
        Math.ceil(strLength / 2) - 1,
        Math.ceil(strLength / 2) + 1
      );
    }
  }
}
