/* 
**문제 설명**

매개변수 str과 op가 주어집니다.

op에는 산술연산자 기호가 담겨 있습니다.

문자열 str 내에 존재하는 op 기호의 개수를 리턴해 주는 함수를 완성해 주세요.

**제한 조건**

- str 문자열 내에 op에 담긴 기호가 존재하지 않는다면 0을 리턴해야 합니다.
- 숫자 타입 데이터를 리턴해야 합니다.
*/
function finder(str, op) {
  // 여기에 코드를 작성하세요.
  return str.split(op).length-1
}
console.log(finder("+-++-*+-%", "+"))
console.log(finder("+-++-*+-%", "-"))
console.log(finder("+-++-*+-%", "/"))