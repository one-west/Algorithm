/*
**문제 설명**

매개변수 str이 들어옵니다.

str은 문자열 타입 데이터입니다.

해당 문자열 내에 존재하는 달러 기호($)를 찾아 해당 달러 기호의 인덱스 값을 리턴하는 함수를 완성해 주세요.

만약 달러 기호가 존재하지 않는다면, ‘찾을 수 없음’이라는 문자열을 리턴해야 합니다.

**제한 조건**

- 힌트 : 반복문을 사용해야 합니다.
- 문자열도 배열과 같이 인덱스 값을 가집니다.
*/

function moneyCollector(str) {
	// 여기에 코드를 작성하세요.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '$') {
      return i
    }
  }
  return "찾을 수 없음"
}
console.log(moneyCollector("이 물건은 5$ 입니다."))
console.log(moneyCollector("이 물건은 5 입니다."))