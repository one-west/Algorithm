/* Array(), fill(), map() 메서드를 사용해 [3, 5, 7, 9, 11] 배열을 만들어 보세요. */

const arr = Array(5).fill(0).map((v, i) => { return i * 2 + 3; });
console.log(arr);
