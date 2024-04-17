/* 
**문제 설명**

전자제품의 정보가 담긴 객체 obj가 주어집니다.

주어진 obj에 { category: “전자제품” } property를 추가한 뒤 해당 obj를 리턴하는 함수를 완성해 주세요.

**입출력 예시**

```jsx
-----------------------------------------------------------------
case | input                                  
-----------------------------------------------------------------
case1: addAttribute({ name : "스타일러", company : "LG", made : "한국" })
case2: addAttribute({ name : "디지털 카메라", company : "캐논", made : "일본" })

-----------------------------------------------------------------
case | output                                  
-----------------------------------------------------------------
case1: { name : "스타일러", company : "LG", made : "한국", category : "전자제품" }
case2: { name : "디지털 카메라", company : "캐논", made : "일본", category : "전자제품" }
```
*/
function addAttribute(obj) {
	// 여기에 코드를 작성하세요.
	obj.category = "전자제품"
	return obj
}
console.log(addAttribute({ name : "스타일러", company : "LG", made : "한국" }));
console.log(addAttribute({ name : "디지털 카메라", company : "캐논", made : "일본" }));