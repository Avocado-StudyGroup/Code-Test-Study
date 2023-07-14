// 선택정렬
function solution(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    let tmp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = tmp;
  }
  return array;
}

console.log(solution([5, 3, 4, 2, 1]));

// 버블정렬
function solution1(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(solution1([5, 3, 4, 2, 1]));
