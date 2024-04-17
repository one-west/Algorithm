/* 
**문제 설명**

임의의 데이터를 입력받아, 값이 '코드캠프'와 일치할 경우 true를, 그렇지 않을 경우 false를 반환하는 함수를 완성하세요

**제한 조건**

- 매개변수 str로는 문자 타입 데이터가 들어옵니다.
*/

function isEqual(str) {
	// 여기에 코드를 작성하세요.
  return str === "코드캠프" ? true : false
}
console.log(isEqual("코드캠프"))
console.log(isEqual("코드캠푸"))