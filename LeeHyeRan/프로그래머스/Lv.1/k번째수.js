function solution(array, commands) {
  let answer = [];
  let tmp = [];
  for (let i = 0; i < commands.length; i++) {
    let num = 0;
    for (let j = 0; j < array.length; j++) {
      if (j + 1 >= commands[i][0] && j + 1 <= commands[i][1]) {
        tmp.push(array[j]);
      }
    }
    tmp.sort((a, b) => a - b);
    num = commands[i][2] - 1;
    answer.push(tmp[num]);
    tmp = [];
  }
  return answer;
}

function solution(array, commands) {
  let answer = [];
  let tmp = [];
  let start = 0;
  let end = 0;
  let k = 0;
  for (let i = 0; i < commands.length; i++) {
    start = commands[i][0] - 1;
    end = commands[i][1];
    k = commands[i][2] - 1;
    for (let j = start; j < end; j++) {
      tmp.push(array[j]);
    }
    tmp.sort((a, b) => a - b);
    answer.push(tmp[k]);
    tmp = [];
  }
  return answer;
}

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let eachCommand = commands[i];
    let slice = array.slice(eachCommand[0] - 1, eachCommand[1]);
    answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1]);
  }

  return answer;
}
