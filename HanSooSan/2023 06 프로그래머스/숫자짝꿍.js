const solution = (X, Y) => {
  let answer = [];

  // 해싱으로 풀거다 그럼 각 매개변수에 어떤 숫자가 몇개 있는지 알아보자
  let XMap = new Map()
  let YMap = new Map()

  for (let x of X) {
    XMap.set(x, (XMap.get(x) || 0) + 1)
  }

  for (let y of Y) {
    YMap.set(y, (YMap.get(y) || 0) + 1)
  }

  // 해싱이 끝났으면 0~9숫자를 key로 조회하기 위해 반복문을 돌리자
  for (let i = 0; i < 10; i++) {
    // i type이 number니까 타입캐스팅 해주자.
    let key = i.toString()

    // 두 변수에 동일하게 포암되어있는 key가 있는지 확인 후
    if (XMap.has(key) && YMap.has(key)) {
      // 갯수가 적은 값을 기준으로 answer에 추가해준다. (그래야 둘 다 갖고있는 갯수가 같으니까)
      let min = Math.min(XMap.get(key), YMap.get(key))

      for (let j = 0; j < min; j++) {
        answer.push(i)
      }
    }
  }

  // 배열에 아무것도 없으면 겹치는게 없다는 소리니까. -1
  if (answer.length === 0) return -1
  // 배열에 0밖에 없으면 00이 아니라 0을 반환해야하니까 확인
  if (answer.reduce((acc, cur) => acc + cur, 0) === 0) return 0
  // 위 두 경우가 아니라면 가장 큰 숫자를 리턴해야하니까 sorting 문자열로 반환하래니까 join('')
  return answer.sort((a, b) => b - a).join('')
}
