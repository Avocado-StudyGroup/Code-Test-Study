const solution = (ingredient) => {
  let answer = 0;
  let stack = []

  ingredient.forEach(v => {
    // stack에 일단 value를 넣는다.
    stack.push(v)
    // stack의 길이가 4를 넘어가면 위에서부터 4개의 재료가 햄버거를 만들 수 있는지 확인한다.
    if (stack.length >= 4) {
      // 만약에 마지막 4개의 재료로 햄버거를 만들 수 있다면 4개의 재료를 stack에서 제거하고 answer를 올린다.
      if (stack.slice(-4).join('') === '1231') {
        for (let i = 0; i < 4; i++) {
          stack.pop()
        }
        answer++
      }
    }
  })

  return answer;
}
