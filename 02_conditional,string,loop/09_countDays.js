/* 
**문제 설명**

임의의 달, month를 입력받아, 각 달이 며칠로 이루어져 있는 지 알려주는 함수를 완성하세요.

**제한 조건**

- 연도는 2016년을 기준으로 합니다.
- 2016년은 윤년입니다.
*/
function countDays(month) {
	// 여기에 코드를 작성하세요.
  return new Date(2016, month, 0).getDate()
}
console.log(countDays(1))
console.log(countDays(2))
console.log(countDays(3))
console.log(countDays(4))
console.log(countDays(5))
console.log(countDays(6))
console.log(countDays(7))
console.log(countDays(8))
console.log(countDays(9))
console.log(countDays(10))
console.log(countDays(11))
console.log(countDays(12))