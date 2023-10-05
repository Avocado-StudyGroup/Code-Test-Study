// 시간 초과 답안
function solution(record) {
  let answer = [];
  let id = [];
  let user = [];
  let enter = "님이 들어왔습니다.";
  let leave = "님이 나갔습니다.";
  for (let i = 0; i < record.length; i++) {
    let str = record[i].split(" ");
    if (!id.includes(str[1]) && str[2] !== undefined) {
      id.push(str[1]);
      user.push(str[2]);
    } else if (
      id.includes(str[1]) &&
      str[2] !== undefined &&
      user[id.indexOf(str[1])] !== str[2]
    ) {
      user[id.indexOf(str[1])] = str[2];
    }
  }

  for (let i = 0; i < record.length; i++) {
    let str = record[i].split(" ");
    let name = user[id.indexOf(str[1])];
    if (str[0] === "Enter") {
      answer.push(name + enter);
    } else if (str[0] === "Leave") {
      answer.push(name + leave);
    }
  }
  return answer;
}

function solution(record) {
  const answer = [];
  const finalInfo = {};
  // 1
  for (const rc of record) {
    const [op, id, name] = rc.split(" ");
    if (op === "Enter") {
      finalInfo[id] = name;
      answer.push(["님이 들어왔습니다.", id]);
    }
    if (op === "Leave") answer.push(["님이 나갔습니다.", id]);
    if (op === "Change") finalInfo[id] = name;
  }
  // 2
  return answer.map((value) => finalInfo[value[1]] + value[0]);
}

function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");

    if (state !== "Change") {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}
