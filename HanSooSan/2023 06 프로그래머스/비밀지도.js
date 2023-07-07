const solution = (n, arr1, arr2) => {
  let answer = []
  let map1 = []
  let map2 = []

  // 2진수로 바꾸자
  arr1.forEach(v => map1.push(v.toString(2)))
  arr2.forEach(v => map2.push(v.toString(2)))

  // 2진수로 바꿨는데 앞쪽 0은 다 빠져있으니 padStart로 채워주자
  for (let i = 0; i < n; i++) {
    if (map1[i].length !== n) {
      for (let j = 0; j < n; j++) {
        map1[i] = map1[i].padStart(n, 0)
      }
    }
    if (map2[i].length !== n) {
      for (let j = 0; j < n; j++) {
        map2[i] = map2[i].padStart(n, 0)
      }
    }
  }

  // 두 map 비교하면서 하나라도 1이라면 wall에 # push해주고 벽 완성되면 answer에 push
  for (let i = 0; i < n; i++) {
    let wall = []
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === '1' || map2[i][j] === '1') wall.push('#')
      else wall.push(' ')
    }
    answer.push(wall.join(''))
  }

  return answer
}