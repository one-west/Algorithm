/*
**문제 설명**

임의의 수를 입력받아 홀수일 경우 true를 리턴하고, 그렇지 않을 경우 false를 리턴하는 함수를 완성하세요.

0은 짝수로 간주합니다

**제한 조건**

- 힌트 : 홀수는 2로 나누어 떨어지지 않습니다.
 */

function isOdd(num) {
  // 여기에 코드를 작성하세요
  return num % 2 !== 0 ? true : false
}
console.log(isOdd(10))
console.log(isOdd(3))
console.log(isOdd(0))