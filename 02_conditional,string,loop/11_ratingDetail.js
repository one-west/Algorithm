/* 
**문제 설명**

점수를 입력받아 점수에 맞는 등급을 알려주는 함수를 완성하세요.
점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

또한, 각 점수 등급 중 일의 자리 점수에 따라 세부 등급을 기존 등급 뒤에 붙여 표시해야 합니다.

- 등급 영역
    - 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
    - 90점 ~ 100점 : 'A'
    - 80점 ~ 89점 : 'B'
    - 70점 ~ 79점 : 'C'
    - 60점 ~ 69점 : 'D'
    - 0점 ~ 59점 : '등급 미달'
- 세부 등급 영역
    - *7~9점대는 +*
    - *0~3점대는 -*
    - *4~6점대에는 기호를 추가하지 않습니다*

**제한 조건**

- ‘문자열’ 타입 데이터를 리턴해야 합니다.
- 매개변수 num은 정수입니다.
*/
function ratingDetail(num) {
	// 여기에 코드를 작성하세요.
  let result
  if (num < 0 || num > 100) {
    return result = "잘못된 입력입니다"
  }

  if (num >= 90 && num <= 100) {
    result = "A"
  } else if (num >= 80 && num <= 89) {
    result = "B"
  } else if (num >= 70 && num <= 79) {
    result = "C"
  } else if (num >= 60 && num <= 69) {
    result = "D"
  } else {
    return result = "등급 미달"
  }

  if (num % 10 >= 7) {
    result += "+"
  } else if (num % 10 <= 3) {
    result += "-"
  } else {}

  return result
}
console.log(ratingDetail(101))
console.log(ratingDetail(99))
console.log(ratingDetail(96))
console.log(ratingDetail(82))
console.log(ratingDetail(78))
console.log(ratingDetail(75))
console.log(ratingDetail(62))
console.log(ratingDetail(60))
console.log(ratingDetail(50))
console.log(ratingDetail(-2))