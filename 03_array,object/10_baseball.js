/* 
**문제 설명**

객체를 담은 배열 arr이 주어집니다.

arr 내에 존재하는 객체는 선수들의 정보를 담고 있습니다.

arr 내, 선수들의 정보를 담은 객체를 확인하여 “야구” 종목 선수이면서, “코드어벤저스” 팀에 속한 선수들의 수를 세어 그 수를 리턴하는 함수를 완성해 주세요.

**제한 조건**

- arr의 모든 요소는 객체입니다.
- 선수들의 종목은 part에 담겨 있습니다.
- 각 선수들이 속한 팀은 team에 담겨 있습니다.
- 해당하는 선수들의 수(number)를 리턴해야 합니다.

**입출력 예시**

```jsx
-----------------------------------------------------------------
case | input                                  
-----------------------------------------------------------------
case1: baseball([
          {name: "이정후", part: "야구", team: "키움히어로즈"},
          {name: "노원두", part: "야구", team: "코드어벤저스"},
          {name: "손흥민", part: "축구", team: "토트넘홋스퍼"},
          {name: "조아라", part: "복싱", team: "코드어벤저스"},
          {name: "김연경", part: "배구", team: "상하이브라이트"},
          {name: "최정", part: "야구", team: "SSG랜더스"},
          {name: "홍재훈", part: "야구", team: "코드어벤저스"}
        ])
case2: baseball([
          {name: "Atom", part: "야9", team: "코두어벤저스"},
          {name: "Dave", part: "야그", team: "코즈어벤저스"},
          {name: "Hany", part: "야구", team: "코드어벤져스"},
          {name: "Soora", part: "야고", team: "코드이벤저스"},
          {name: "Junny", part: "야구", team: "코드어벤저스"},
          {name: "Carl", part: "아구", team: "쿄드어벤저스"},
          {name: "Rina", part: "baseball", team: "코드 어벤저스"}
        ])

-----------------------------------------------------------------
case | output                                  
-----------------------------------------------------------------
case1: 2
case2: 1
```
*/
function baseball(arr) {
	// 여기에 코드를 작성하세요.
	const resultObj = arr.filter(element => {
		return element.part === "야구" && element.team === "코드어벤저스"
	});
	return resultObj.length
}

console.log(baseball([
	{name: "이정후", part: "야구", team: "키움히어로즈"},
	{name: "노원두", part: "야구", team: "코드어벤저스"},
	{name: "손흥민", part: "축구", team: "토트넘홋스퍼"},
	{name: "조아라", part: "복싱", team: "코드어벤저스"},
	{name: "김연경", part: "배구", team: "상하이브라이트"},
	{name: "최정", part: "야구", team: "SSG랜더스"},
	{name: "홍재훈", part: "야구", team: "코드어벤저스"}
]));

console.log(baseball([
	{name: "Atom", part: "야9", team: "코두어벤저스"},
	{name: "Dave", part: "야그", team: "코즈어벤저스"},
	{name: "Hany", part: "야구", team: "코드어벤져스"},
	{name: "Soora", part: "야고", team: "코드이벤저스"},
	{name: "Junny", part: "야구", team: "코드어벤저스"},
	{name: "Carl", part: "아구", team: "쿄드어벤저스"},
	{name: "Rina", part: "baseball", team: "코드 어벤저스"}
]));