/* 
**문제 설명**

조건문은 if와 else로 분기할 수 있을 뿐만 아니라, else if()를 통해 중간 분기를 추가할 수 있습니다.

함수 ageFilter는 유저의 나이를 입력받아,

20세 이상이면 '성인', 8세~19세일 경우 '학생', 7세 이하일 경우 '어린이'를 반환하는 함수입니다.

함수 내부에 조건문을 사용하여 코드를 완성하세요

**제한 조건**

- 매개변수 age로는 숫자 타입 데이터가 들어옵니다.
*/

function ageFilter(age) {
	// 여기에 코드를 작성하세요.
  let result;
  if (isNaN(age)) {
    return "입력된 값이 숫자가 아닙니다"
  }
  if (age >= 20) {
    result = "성인"
  } else if (age >= 8 && age <= 19) {
    result = "학생"
  } else {
    result = "어린이"
  }
  return result
}
console.log(ageFilter(30))
console.log(ageFilter(20))
console.log(ageFilter(19))
console.log(ageFilter(8))
console.log(ageFilter(7))
