/* 
**문제 설명**

객체를 담은 매개변수 obj가 주어집니다.

obj에는 학생의 정보가 담겨 있습니다.

obj에 담긴 학생의 거주지(home)이 ‘구로구’인지 확인하여 ‘구로구’가 맞다면 true, 아니라면 false를 리턴하는 함수를 완성해 주세요.

**입출력 예시**

```jsx
-------------------------------------------------------------------------------------
case | input                                                        | output
-------------------------------------------------------------------------------------
case1: classmates({ name : "철수", class : "2반", home : "구로구" })   | true
case2: classmates({ name : "Junny", class : "2반", home : "광명시" }) | false
```
*/
function classmates(obj) {
	// 여기에 코드를 작성하세요.
	return obj.home === '구로구' ? true : false
}

console.log(classmates({ name : "철수", class : "2반", home : "구로구" }));
console.log(classmates({ name : "Junny", class : "2반", home : "광명시" }));