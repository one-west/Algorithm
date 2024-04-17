/* 
**문제 설명**

매개변수 num이 주어집니다.

임의의 숫자 num을 입력받아, 1부터 num 사이에 존재하는 5의 배수만으로 구성된 문자열을 리턴하는 함수를 완성하세요

**제한 조건**

- 1부터 num 사이에 존재하는 정수 중, 5의 배수가 없다면 빈 문자열을 리턴해야 합니다.
*/
function penta(num) {
	// 여기에 코드를 작성하세요.
  let str = ""
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) {
      str += i
    }
  }
  return str
}

console.log(penta(102))