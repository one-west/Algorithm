/* 
**문제 설명**

매개변수 str에는 임의의 문자열이 담겨 있습니다.

str에 담겨 있는 서로 다른 글자를 하나씩 조합해 만들 수 있는 길이 2의 문자열을 모두 확인하여

만들 수 있는 모든 문자열을 배열에 담아 리턴하는 함수를 완성해 주세요.

**제한 조건**

- 배열을 리턴해야 합니다.
- 힌트 : 이중 반복문을 사용해야 합니다.
*/

function league(str) {
	// 여기에 코드를 작성하세요.
  let strObj = []
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      strObj.push(str[i]+str[j])
    }
  }
  return strObj
}
console.log(league("123"))