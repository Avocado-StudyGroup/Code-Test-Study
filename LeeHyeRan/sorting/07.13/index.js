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

// 삽입 정렬
function solution2(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      } else break;
    }
  }
  return arr;
}

console.log(solution2([5, 3, 4, 2, 1]));

// 병합 정렬
function merge(left, right) {
  const sortedArr = [];
  while (left.length && right.length) {
    //left[0]이 더작을 경우 같을때는 누가 먼저 들어가도 상관X
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  //left,right 둘 중 하나는 요소가 남아있기 때문에 sortedArr 뒤에 붙여서 출력
  //비어있으면 spread Syntax에도 아무것도 없기 때문에 그냥 다 붙여줌
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const boundary = Math.ceil(arr.length / 2);
  //slice로 해주기 때문에 원본 arr은 손상 없음
  const left = arr.slice(0, boundary);
  const right = arr.slice(boundary);
  //요소가 1개 일 때까지 재귀를 실행해 요소가 1개일 때 두 left,right부터
  //차근차근 merge(정렬해서 합치기)해주면 됨
  return merge(mergeSort(left), mergeSort(right));
}

const arr = [7, 4, 3, 2, 1, 6, 5];
const sortedArray = mergeSort(arr);
console.log(sortedArray); //[1, 2, 3, 4, 5, 6, 7]
