process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
});

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  let answer = "";
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      if (j !== a - 1) {
        answer += "*";
      } else {
        answer += "*\n";
      }
    }
  }
  console.log(answer);
});
