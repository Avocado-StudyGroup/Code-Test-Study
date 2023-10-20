function solution(food) {
  let answer = "";
  let tmp = 0;
  let tmpArr = [];
  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      tmp += food[i] - 1;
      tmpArr.push((food[i] - 1) / 2);
    } else {
      tmp += food[i];
      tmpArr.push(food[i] / 2);
    }
  }
  for (let i = 0; i < tmpArr.length; i++) {
    let num = i + 1;
    answer += String(num).repeat(tmpArr[i]);
  }
  let reverse = answer.split("").reverse().join("");
  return answer + "0" + reverse;
}

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}
