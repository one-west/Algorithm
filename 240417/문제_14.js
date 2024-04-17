/* 다음 코드의 console.log() 결과는 무엇일까요? */

const hof = (a) => (b) => (c) => {
  return a + (b * c);
}
const first = hof(3);
const second = first(4);
const third = second(5);

// 답 : 23