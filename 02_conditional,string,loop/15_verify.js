/* 
**문제 설명**

매개변수로 id와 password가 들어옵니다.

id와 password가 아래의 조건을 모두 충족하는지 확인하여, 모두 충족한다면 true를 충족하지 못한다면 false를 리턴하는 함수를 완성해 주세요.

- id는 4글자 이상이어야 합니다.
- password는 8글자 이상이어야 합니다.
- password는 “!”를 포함하고 있어야 합니다.

**제한 조건**

- id와 password는 문자열 타입 데이터입니다.
*/
function verify(id, password) {
	// 여기에 코드를 작성하세요.
	const idReg = /.{4,}/
  const pwReg = /(?=.*[!]).{8,}/
  if (idReg.test(id) && pwReg.test(password)) {
    return true
  }
  return false
}

console.log(verify("code", "!abcdefg!"))
console.log(verify("codecamp", "abcdefg"))
console.log(verify("코드캠프", "abcdefg"))