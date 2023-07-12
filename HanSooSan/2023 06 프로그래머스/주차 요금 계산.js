function solution(fees, records) {
  var answer = [];
  let In = []
  let Out = []
  let Time = new Map()

  // in out 시간과 차량 번호를 저장
  records.forEach(v => {
    let record = v.split(' ');
    let [time, num, inOut] = record

    if (inOut === 'IN') In.push([num, time])
    if (inOut === 'OUT') Out.push([num, time])
  })

  // 차례대로 넣어줘야 하니까 차량 번호대로 sort
  In.sort((a, b) => { return a[0] - b[0] })
  Out.sort((a, b) => { return a[0] - b[0] })

  // 몇 분 동안 주차되어 있었는지를 알아야 하니까 Time map만들어줌 
  for (let x of In) {
    let [num, time] = x
    let OutTime = '23:59';

    // 입차 후 출차 안된 차량도 있을거기 때문에 동일한 차례에 출차가 없다면 23:59으로 저장
    // 출차된 차량 체크 했다면 shift로 체크리스트에서 제외
    for (let i = 0; i < Out.length; i++) {
      if (num === Out[i][0]) {
        OutTime = Out[i][1]
        Out.shift()
        break
      }
    }

    // 각각 inTimer과 outTime을 분으로 변환하고 차이만큼을 주차한 시간으로 간주 set해줌
    let inTime = Number(time.split(':')[0] * 60) + Number(time.split(':')[1])
    let outTime = Number(OutTime.split(':')[0] * 60) + Number(OutTime.split(':')[1])
    let defTime = outTime - inTime

    Time.set(num, (Time.get(num) || 0) + defTime)
  }

  // 주차 시간이 주어진 map을 가지고 차례로 금액이 얼마 나왔는지 계산해 answer배열에 넣어줌
  for (let [key, val] of Time) {
    if (val < fees[0]) answer.push(fees[1])
    else answer.push(fees[1] + Math.ceil((val - fees[0]) / fees[2]) * fees[3])
  }

  return answer;
}