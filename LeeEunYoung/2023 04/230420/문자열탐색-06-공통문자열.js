const commonString = (arr) => {
  let answer = '';
  for (let i = 1; i < arr.length; i++) {
    for (let v = 0; v < arr.length + 1; v++) {
      if (arr[0][v] === arr[i][v]) {
        if (!answer.includes(arr[0][v])) answer += arr[0][v];
      }
    }
  }

  console.log(answer);
  return answer;
};

// test code
commonString(['long', 'longtime', 'longest']); //'long'
commonString(['automatic', 'autograph', 'autonomous']); //'auto'
