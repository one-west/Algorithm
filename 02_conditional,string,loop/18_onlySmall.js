/* 
**문제 설명**

대소문자가 섞인 임의의 문자열을 입력받아, 모두 소문자로 변환하여 리턴하는 함수를 완성하세요

**제한 조건**

- 힌트 : Javascript의 내장 함수 중, 문자열을 다루는 내장 함수(메서드)를 사용해 보세요.
*/
function onlySmall(str) {
	// 여기에 코드를 작성하세요.
  return str.toLowerCase()
}
console.log(onlySmall("ABCDE"))
console.log(onlySmall("hElLo WoRlD"))
console.log(onlySmall("CODEcamp"))