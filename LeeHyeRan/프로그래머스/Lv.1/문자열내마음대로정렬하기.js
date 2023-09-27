function solution(strings, n) {
  let answer = [];
  let tmp = [];
  for (let i = 0; i < strings.length; i++) {
    let a = strings[i].split("");
    tmp.push(a[n]);
  }
  strings.sort();
  tmp.sort();
  for (let i = 0; i < tmp.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      let a = strings[j].split("");
      if (a[n] === tmp[i]) {
        tmp[i] = strings[j];
        strings.splice(j, 1);
      }
    }
  }
  return tmp;
}

function solution(strings, n) {
  return strings.sort().sort((a, b) => a.charCodeAt(n) - b.charCodeAt(n));
}
