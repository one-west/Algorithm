/* 
**문제 설명**

임의의 수를 입력받아, 3과 5로 각각 나눈 다음, '나머지 값'에 따라 알맞은 메세지를 리턴하세요.

- 3으로 나누어 떨어지는 경우 'A그룹'을 리턴
- 5로 나누어 떨어지는 경우 'B그룹'을 리턴
- 3과 5로 모두 나누어 떨어지는 경우, 'AB그룹'을 리턴
- 3과 5로 나누어 떨어지지 않는 경우, 'C그룹'을 리턴
*/
function groupMaker(num) {
  // 여기에 코드를 작성하세요.
  let result
  if (num % 3 === 0 && num % 5 === 0) {
    result = "AB그룹"
  } else if (num % 3 === 0) {
    result = "A그룹"
  } else if (num % 5 === 0) {
    result = "B그룹"
  } else {
    result = "C그룹"
  }
  return result
}
console.log(groupMaker(3))
console.log(groupMaker(5))
console.log(groupMaker(15))
console.log(groupMaker(13))