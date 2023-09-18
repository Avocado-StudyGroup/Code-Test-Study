function solution(sizes) {
  let answer = 0;
  let x = [];
  let y = [];
  let xMax = 0;
  let yMax = 0;
  for (let i = 0; i < sizes.length; i++) {
    x.push(sizes[i][0]);
    y.push(sizes[i][1]);
  }
  for (let i = 0; i < y.length; i++) {
    if (y[i] > x[i]) {
      let tmpx = x[i];
      let tmpy = y[i];
      x[i] = tmpy;
      y[i] = tmpx;
    }
  }
  xMax = Math.max(...x);
  yMax = Math.max(...y);
  return (answer = xMax * yMax);
}

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });
  return w * h;
}
