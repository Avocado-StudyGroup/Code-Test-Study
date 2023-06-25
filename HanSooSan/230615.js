// 재귀함수

const solution1 = (n) => {
  let answer = "";

  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(n - 1);
      answer += n;
    }
  };
  DFS(n);

  return answer;
};

console.log(solution1(3));

// DFS(n) 을 실행하면 스택 프레임에 추가하고 실행 되다가
// DFS(k - 1) 을 만나면 최초 실행된 DFS (n === 3) 은 sleep 상태가 되어 다 실행되지 못하고 멈춘다.
// 이런 순서대로 가다보면 DFS(3) , DFS(2) , DFS(1) 순서로 쌓이게되는데 위에서부터 pop하듯이 종료되면서 빠진다
// 즉 DFS(1) === answer ="1" , DFS(2) === answer = "12" , DFS(3) === answer ="123" 순서대로 진행되어 끝난다
// if(k === 0) return 문이 있기 때문에 더 이상 스택 프레임에 쌓이지 않는다.

const solution2 = (n) => {
  let answer = 0,
    tmp = [];

  const DFS = (n) => {
    if (n == 0) return;
    else {
      DFS(parseInt(n / 2));
      tmp.push(n % 2);
    }
  };
  DFS(n);

  answer = tmp.join("");

  return answer;
};

console.log(solution2(11));

// 이건 그냥 parseInt / toString 메서드로 변환하는 방법밖에 몰랐던 탓에... 2진법 변환 방법을 몰라 참고했습니다.

// 이진트리 순회

const solution3 = (n) => {
  let answer = "";
  const DFS = (v) => {
    if (v > 7) return;
    else {
      answer += v + " "; // 전위 위치
      DFS(v * 2);
      // answer += v + " "; // 중위 위치
      DFS(v * 2 + 1);
      // answer += v + " "; // 후위 위치
    }
  };
  DFS(n);
  return answer;
};
console.log(solution3(1));

// 이진트리가 밑 그림처럼 되어있다면 answer을 추가하는 answer += v + " " 의 위치만 바꿔주면 된다.
//                 DFS(1)

//     DFS(1*2)                DFS(1*2+1)

// DFS(2*2)  DFS(2*2+1)    DFS(3*2)  DFS(3*2+1)

// 조합의 경우수
const solution4 = (n, r) => {
  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  answer = DFS(n, r);

  return answer;
};

console.log(solution4(5, 3));
