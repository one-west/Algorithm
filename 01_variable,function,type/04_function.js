/* 
**문제 설명**

자바스크립트에서 기본적으로 내장하고 있는 기능을 '내장 함수'라고 부르고,

우리가 직접 만드는 기능을 '함수'라고 부릅니다.

'함수'는 입력(input)을 받아, 우리가 작성한 코드를 거쳐 결과를 출력(output)하는, 하나의 작은 기능 단위입니다.

첫번째 매개변수 'num1'과 두번째 매개변수 'num2'가 주어졌을 때,

이 두 값을 곱한 값을 변수 result에 할당하여 리턴하는 함수 fnc를 작성하세요
*/
function fnc(num1, num2) {
	// 여기에 코드를 작성하세요.
  let result = num1 * num2;
	// 아래 코드는 수정하지 마세요.
	return result
}
console.log(fnc(10,1))
console.log(fnc(2,8))
console.log(fnc(3,9))