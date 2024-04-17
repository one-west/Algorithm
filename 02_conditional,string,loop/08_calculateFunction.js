/* 
**문제 설명**

임의의 수 2개(num1, num2)와, 연산 기호 1개(op)가 매개변수로 받아와집니다.

num1, num2를 op를 사용한 연산에 적용시켜 그 결과값을 리턴해 주세요.

**제한 조건**

- num1, num2는 숫자 타입 데이터입니다.
- op는 산술 연산자 기호를 담은 ‘문자열’ 타입 데이터입니다.
*/
function calculateFunction(num1, num2, op) {
  // 여기에 코드를 작성하세요.
  let result;
  switch (op) {
    case '+': result = num1 + num2
      break
    case '-': result = num1 - num2
      break;
    case '*': result = num1 * num2
      break;
    case '/': result = num1 / num2
      break;
    case '%': result = num1 % num2
      break;
    default: "산술 연산자 입력 오류"
      break;
  }
  return result
}
console.log(calculateFunction(5, 5, "+"))
console.log(calculateFunction(1, 10, "-"))
console.log(calculateFunction(5, 11, "*"))
console.log(calculateFunction(10, 2, "/"))
console.log(calculateFunction(22, 2, "%"))