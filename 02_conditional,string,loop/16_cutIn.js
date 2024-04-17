/* 
**문제 설명**

임의의 문자열(str)과 수(num)를 입력받아,

str의 맨 앞부터 num개만큼의 문자를 가져와 리턴하는 함수를 완성해 주세요.

**제한 조건**

- 힌트 : Javascript의 내장 함수 중, 문자열을 다루는 내장 함수(메서드)를 사용해 보세요.
*/
function cutIn(str, num) {
	// 여기에 코드를 작성하세요.
  return str.slice(0, num)
}

console.log(cutIn("Javascript", 4))
console.log(cutIn("Coding", 0))