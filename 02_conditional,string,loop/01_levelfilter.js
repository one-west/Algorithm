/* 
**문제 설명**

조건문은 기준에 따라 분기를 만들어 다르게 실행할 수 있도록 하는 문법입니다.

함수 levelFilter는 유저의 레벨을 입력받아,

레벨이 30 이상일 경우 true를, 30 미만일 경우 false를 리턴하는 함수입니다.

함수 내부에 조건문을 사용하여 코드를 완성하세요

**제한 조건**

- 매개변수 level로는 숫자 타입 데이터가 들어옵니다.
*/

function levelFilter(level) {
	// 여기에 코드를 작성하세요.
  return level >= 30 ? true : false
}
console.log(levelFilter(40))
console.log(levelFilter(30))
console.log(levelFilter(29))