function solution(x) {
  let str = String(x);
  let num = (arg) => Number(arg);
  let arr = Array.from(str, num);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}

function solution(x) {
  let arr = String(x).split("");
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    y += Number(arr[i]);
  }
  return x % y === 0 ? true : false;
}
