/* 
**문제 설명**

임의의 수 num을 입력받아, 30 이상이면서 짝수일 때 true를 리턴하고, 그렇지 않을 때 false를 리턴하는 함수를 완성하세요.

**제한 조건**

- num으로는 숫자 타입 데이터가 들어옵니다.
- 논리연산자를 활용하세요.
*/

function dualOption(num) {
	// 여기에 코드를 작성하세요.
  let result;
  if (num >= 30 && num % 2 === 0) {
    result = true
  } else {
    result = false
  }
  return result
}
console.log(dualOption(32))
console.log(dualOption(31))
console.log(dualOption(28))