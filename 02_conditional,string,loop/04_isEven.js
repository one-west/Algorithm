/* 
**문제 설명**

임의의 수를 입력받아 짝수일 경우 true를, 그렇지 않을 경우 false를 리턴하는 함수를 완성하세요.

0은 짝수로 간주합니다

**제한 조건**

- 힌트 : 짝수는 항상 2로 나누어 떨어집니다.
*/
function isEven(num) {
	// 여기에 코드를 작성하세요.
  return num % 2 === 0 ? true : false
}
console.log(isEven(10))
console.log(isEven(0))
console.log(isEven(3))