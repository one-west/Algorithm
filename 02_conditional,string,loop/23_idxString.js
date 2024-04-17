/* 
**문제 설명**

매개변수 num이 주어집니다.

임의의 숫자 num을 입력 받아, 0부터 num까지의 숫자를 모두 담은 문자열을 리턴하는 함수를 완성해 주세요.

**제한 조건**

- 임의의 수 num은 음수를 포함한 정수입니다.
*/

function idxString(num) {
	// 여기에 코드를 작성하세요.
  let result = ""
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      result += i
    }
  } else {
    for (let i = 0; i >= num; i--) {
      result += i
    }
  }
  return result
}

console.log(idxString(3))