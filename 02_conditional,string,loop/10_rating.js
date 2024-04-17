/* 
**문제 설명**

점수를 입력받아 점수에 맞는 등급을 알려주는 함수를 완성하세요.
점수가 0점 미만이거나 100점을 초과할 경우 '잘못된 입력입니다'를 리턴해야 합니다.

- 0점 미만 또는 100 점 초과 : '잘못된 입력입니다'
- 90점 ~ 100점 : 'A등급'
- 80점 ~ 89점 : 'B등급'
- 70점 ~ 79점 : 'C등급'
- 60점 ~ 69점 : 'D등급'
- 0점 ~ 59점 : '등급 미달'

**제한 조건**

- ‘문자열’ 타입 데이터를 리턴해야 합니다.
- 매개변수 num은 정수입니다.
*/
function rating(num) {
  // 여기에 코드를 작성하세요.
  let result
  if (num >= 90 && num <= 100) {
    result = "A등급"
  } else if (num >= 80 && num <= 89) {
    result = "B등급"
  } else if (num >= 70 && num <= 79) {
    result = "C등급"
  } else if (num >= 60 && num <= 69) {
    result = "D등급"
  } else if (num >= 0 && num <= 59) {
    result = "등급 미달"
  } else {
    result = "잘못된 입력입니다"
  }
  return result
}
console.log(rating(-1))