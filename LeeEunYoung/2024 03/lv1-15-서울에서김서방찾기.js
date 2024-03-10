function solution(array) {
  let location = array.findIndex((el) => el === 'Kim');
  return `김서방은 ${location}에 있다`;
}

console.log(solution(['Jane', 'Kim'])); // "김서방은 1에 있다"
