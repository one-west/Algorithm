/* 
**문제 설명**

자바스크립트는 데이터의 타입에 따라 다른 방식으로 작동하게 됩니다.

string과 string을 더하면, 문자열이 이어 붙인 형태로 반환되고,

number와 number를 더하면, 우리가 생각하는 대로 덧셈 연산이 된 값이 반환됩니다.

문자 7과 숫자 1을 더하면 어떠한 값이 되는지 생각해 보고,

addString 내의 변수 'result'에 결과값을 담아 리턴하세요.
*/
function addString() {
	let result;
	// 문자 7과 숫자 1을 더한 결과를 result 변수에 더해주세요.
	// 여기에 코드를 작성하세요.
  result = "7" + 1
	// 아래 코드는 수정하지 마세요.
	return result;
}
console.log(addString())