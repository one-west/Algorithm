/* 
**문제 설명**

매개변수 num이 주어집니다.

임의의 숫자 num을 입력 받아 해당 수까지의 팩토리얼을 진행한 결과값을 리턴하는 함수를 완성해 주세요.

- factorial : 1부터 임의의 수 사이에 존재하는 정수를 모두 곱하는 과정

**제한 조건**

- 임의의 수 num은 자연수입니다. (음수 포함 x)
*/
function fac(num) {
  // 여기에 코드를 작성하세요.
  if (num <= 0) {
    return "0과 음수는 사용할 수 없습니다."
  } else if (num === 1) {
    return 1
  } else {
    return num * fac(num - 1)
  }
}
console.log(fac(8))
console.log(fac(1))
console.log(fac(5))