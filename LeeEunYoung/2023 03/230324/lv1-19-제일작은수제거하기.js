function solution(arr) {
  // 숫자오름차순으로 해서 0부터 배열의수 -1 까지 출력
  // 원소가 한개면 -1
  // 이게 왜 안돼 -> 배열 정렬하라는 내용은 없음..
  // return arr.length === 1 ? [-1] : arr.sort((a,b) => b - a).slice(0, arr.length);

  // 배열에서 제일 작은 수 제외하고 리턴하기
  return arr.length === 1 ? [-1] : arr.filter((el) => el !== Math.min(...arr));
}
