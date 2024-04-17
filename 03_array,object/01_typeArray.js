/* 
**문제 설명**

배열 arr이 주어집니다.

arr은 다양한 타입의 데이터를 담고 있는 배열입니다.

각 요소가 어떠한 데이터 타입을 나타내는지를 담은 새로운 배열을 리턴하는 함수를 완성해 주세요.

**제한 조건**

- 입력 받은 배열을 수정해서는 안됩니다.
- 빈 배열을 입력 받는 경우, 새로운 빈 배열을 리턴해야 합니다.
- 힌트 : typeof 명령어를 사용하면 배열은 object 타입으로 확인됩니다.
배열을 확인하기 위해서는 별도의 메서드를 사용해야 합니다.

**입출력 예시**

```jsx
-------------------------------------------------------------------------------------
case | input                                     | output
-------------------------------------------------------------------------------------
case1: typeArray([1, "st", true])                | ['number', 'string', 'boolean']
case2: typeArray([undefined, [1, 2], { a: "b"}]) | ["undefined", "array", "object]
case3: typeArray([NaN, "aaa"])                   | ['number', 'string']
```
*/
function typeArray(arr) {
	// 여기에 코드를 작성하세요.
  const resultObj = arr.map((value) => {
    return Array.isArray(value) ? 'array' : typeof(value)
  });

  return resultObj
}

console.log(typeArray([1, "st", true]))
console.log(typeArray([undefined, [1, 2], { a: "b"}]))
console.log(typeArray([NaN, "aaa"]));