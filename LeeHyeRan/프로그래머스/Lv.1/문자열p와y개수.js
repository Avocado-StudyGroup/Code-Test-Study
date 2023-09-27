function solution(s) {
  let answer = true;
  let p = 0;
  let y = 0;
  let string = s.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "p") {
      p += 1;
    } else if (string[i] === "y") {
      y += 1;
    }
  }
  return p === y ? answer : false;
}

function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
