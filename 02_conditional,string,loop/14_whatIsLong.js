/*
**문제 설명**

임의의 문자열 3개를 입력받아, 가장 긴 문자열을 리턴하는 함수를 완성하세요

가장 긴 문자열이 두개 이상일 경우 가장 마지막에 찾은 문자열을 리턴해주세요.

**제한 조건**

문자열의 길이를 비교하여 ‘문자열’ 타입 데이터를 리턴해야 합니다.

**입출력 예시**
-----------------------------------------------------------------
case | input                             | output
-----------------------------------------------------------------
case1: whatIsLong("a", "b", "cd")        | "cd"
case2: whatIsLong("aaa", "aaaaa", "aaa") | "aaaaa"
case3: whatIsLong("abc", "a", "abc")     | "abc"

*/

function whatIsLong(str1, str2, str3) {
	// 여기에 코드를 작성하세요.
  const strObj = [str1, str2, str3,]
  let temp = "";
  for (const str of strObj) {
    if (str.length >= temp.length) {
      temp = str
    }
  }
  return temp
}
console.log(whatIsLong("a", "b", "cd"))
console.log(whatIsLong("aaa", "aaaa", "aaa"))
console.log(whatIsLong("abc", "a", "acd"))