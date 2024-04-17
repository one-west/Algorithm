/* 
**문제 설명**

임의의 문자열 str이 주어집니다.

해당 문자열을 확인하여 중복되는 글자가 존재한다면 true, 중복되는 글자가 존재하지 않는다면 false를 리턴하는 함수를 완성해 주세요.
*/

function isUnique(str) {
	// 여기에 코드를 작성하세요.
  const strObj = str.split("")
  return strObj.every((item, index) => 
  str.indexOf(item) === index)
}
console.log(isUnique("abcd"))
console.log(isUnique("0102"))
console.log(isUnique("aAbB"))