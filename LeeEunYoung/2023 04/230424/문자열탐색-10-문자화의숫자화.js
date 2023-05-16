// 답지참고
// - for 와 foreach : for는 동기, foreach는 비동기(단, foreach는 역순탐색 안되고, 데이터 수정 삭제 불가능)
// - foreach와 map : forEach 메서드는 단순히 반복문을 대체하기 위한 함수이고, map 메서드는 요소값을 다른 값으로 mapping한 새로운 배열을 생성하기 위한 고차함수. (단, foreach는 return 으로 값 반환 안함)

const solution = (str) => {
  const numArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (let i = 0; i <= 9; i++) {
    // 이렇게하면 순회만 됨.
    // console.log(str.replaceAll(numArr[i], i));

    // 이렇게하면 문자열이 그대로 출력됨.... 왜지...ㅠㅠㅠㅠㅠㅠ. 아! 위의 말대로 순회하기만 할뿐이라서!
    // answer = str.replaceAll(numArr[i], i);

    // 원래의 것에다가, 원래의 것을 변형한 것을 할당하면 순회할 때 점점 바뀌어감!
    str = str.replaceAll(numArr[i], i);
  }

  console.log(Number(str));
  return Number(str);
};

// test code
solution('fivesevenzero'); //570
solution('zerofiveseven'); //57
solution('eightsixzerofivesevenfive'); //860575
