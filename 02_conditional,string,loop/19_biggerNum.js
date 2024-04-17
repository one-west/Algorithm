/* 
**문제 설명**

임의의 두 수, num1, num2가 들어옵니다.

num1으로 들어오는 숫자를 num2로 들어오는 숫자와 대소관계를 비교하여 조건에 맞는 올바른 문자열을 리턴하는 함수를 완성하세요

- num1: 6, num2: 7 ⇒ ‘6은(는) 7보다 작습니다’
- num1: 9, num2: 1 ⇒ ‘9은(는) 1보다 큽니다’
- num1: 5, num2: 5 ⇒ ‘5은(는) 5와 같습니다’
*/
function biggerNum(num1, num2) {
	// 여기에 코드를 작성하세요.
  if (num1 > num2) {
    return `${num1}은(는) ${num2}보다 큽니다`
  } else if (num1 < num2) {
    return `${num1}은(는) ${num2}보다 작습니다`
  } else {
    return `${num1}은(는) ${num2}보다 같습니다`
  }
}

console.log(biggerNum(6,6))