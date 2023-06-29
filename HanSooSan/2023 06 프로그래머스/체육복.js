const solution = (n, lost, reserve) => {
  // 잃어버린 학생, 여벌 있는 학생들 체격순으로 정렬
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  // 여벌이 있는데 잃어버린거면 이도저도 아닌거니까 정말 잃어버린건지 정말 여벌 있는건지 체크
  let Lost = lost.filter((v) => !reserve.includes(v));
  let Reserve = reserve.filter((v) => !lost.includes(v));
  // 학생수에서 정말 잃어버린 학생 수를 일단 뺀다.
  let answer = n - Lost.length;

  // 빌려주기 시작
  Lost.forEach((v) => {
    for (let i = 0; i < Reserve.length; i++) {
      // 잃어버린 학생과 여벌 있는 학생을 비교하면서 차이가 1밖에 나지 않는다면 빌려준다.
      if (v - Reserve[i] === -1 || v - Reserve[i] === 1) {
        answer++;
        // 빌려준 경우 여벌 있는 학생을 제거해준다.
        Reserve.splice(i, 1);
        break;
      }
    }
  });

  return answer;
};
