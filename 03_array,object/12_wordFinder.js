/* 
**문제 설명**

알파벳 문장이 담긴 문자열 str이 주어집니다.

str은 각 단어가 공백으로 구분되어 하나의 문장을 이루고 있습니다.

공백으로 구분한 각 단어가 str내에 몇개씩 존재하는지를 기록한 객체를 리턴하는 함수를 완성해 주세요.

**제한 조건**

- str은 알파벳, 공백으로 구성된 문자열 타입 데이터입니다.
- 각 단어를 구분하는 공백은 한 칸 이상입니다.
- 단어가 존재하지 않는 경우 빈 객체를 리턴해야 합니다.
- 단어는 대소문자를 구분하지 않고 개수를 기록해야 합니다.
- str.trim 메서드는 사용이 금지됩니다.

**입출력 예시**

```jsx
-----------------------------------------------------------------
case | input                                  
-----------------------------------------------------------------
case1: wordFinder("this is the MOMENT, THIS IS THE day")
case2: wordFinder("a aA a aAA A aA Aaa AAaA B Bc")

-----------------------------------------------------------------
case | output                                  
-----------------------------------------------------------------
case1: {
				this : 2,
				is : 2,
				the : 2,
				moment : 1,
				day : 1
			 }
case2: {
				a : 3,
				aa : 2,
				aaa : 2,
				aaaa : 1,
				b : 1,
				bc : 1
			 }
```
*/
function wordFinder(str) {
	// 여기에 코드를 작성하세요.
	const words = str.replace(',','').split(' ')
	const wordObj = {}
	for (let i in words) {
		const word = words[i].toLowerCase()
		wordObj[word] = (wordObj[word] ?? 0) + 1
		
	}
	return wordObj
}
console.log(wordFinder("this is the MOMENT, THIS IS THE day"))