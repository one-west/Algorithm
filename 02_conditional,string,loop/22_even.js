/* 
**문제 설명**

임의의 수를 입력받아, 짝수일 경우 true를 반환하고, 홀수일 경우 false를 반환하는 함수를 완성하세요.

0은 짝수로 간주합니다

**제한 조건**

- 나누기 연산자(/), 나머지 연산자(%)의 사용은 금지됩니다.
- 임의의 수 num은 음수를 포함한 정수입니다.
- 힌트 : 숫자에서 반복적으로 2를 뺀 결과가 0이면 짝수, 1이면 홀수입니다.
*/

function even(num) {
	// 여기에 코드를 작성하세요.
  let value = Math.abs(num)
  while (true) {
    if (value === 1) {
      return false
    } else if (value === 0){
      return true
    } else {
      value -= 2
    }
  }
}

console.log(even(2))