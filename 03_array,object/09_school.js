/* 
**문제 설명**

객체를 담은 배열 arr이 주어집니다.

arr 내에 존재하는 객체는 학생들의 정보를 담고 있습니다.

arr 내, 학생들의 정보를 담은 객체를 확인하여 “코드초등학교”에 다니는 학생들을 찾은 뒤, 해당 학생들의 이름만을 담은 새로운 배열을 리턴하는 함수를 완성해 주세요.

**제한 조건**

- arr의 모든 요소는 객체입니다.
- 학생들이 다니는 학교는 school이라는 키에 연결된 값을 확인해야 합니다.

**입출력 예시**

```jsx
-----------------------------------------------------------------
case | input                                  
-----------------------------------------------------------------
case1: school([
          { name : "Jonny", school : "코드초등학교", age : "8" },
          { name : "Danny", school : "캠프초등학교", age : "10" },
          { name : "Yonny", school : "프리초등학교", age : "9" },
          { name : "Hoony", school : "코드초등학교", age : "8" },
        ])

-----------------------------------------------------------------
case | output                                  
-----------------------------------------------------------------
case1: ["Jonny", "Hoony"]
```
*/
function school(arr) {
	// 여기에 코드를 작성하세요.
	const resultObj = []
	arr.forEach(value => {
		if (value.school === "코드초등학교") {
			resultObj.push(value.name)
		}
	});
	return resultObj
}
console.log(school([
	{ name : "Jonny", school : "코드초등학교", age : "8" },
	{ name : "Danny", school : "캠프초등학교", age : "10" },
	{ name : "Yonny", school : "프리초등학교", age : "9" },
	{ name : "Hoony", school : "코드초등학교", age : "8" },
]));