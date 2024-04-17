/*
**문제 설명**

  - 임의의 문자열 2개(str1, str2)를 입력받아,  두 문자열 길이의 평균을 구해 리턴하는 함수를 완성하세요.

**제한 조건**

  - 숫자 타입 데이터를 리턴해야 합니다.

**입출력 예시**
-----------------------------------------------------------------
case | input                             | output
-----------------------------------------------------------------
case1: avgLength("Javascript", "연습공부") | 7
case2: avgLength("코드캠프", "")           | 2
case3: avgLength("abc", "cdef")          | 3.5

*/

function avgLength(str1, str2) {
  // 여기에 코드를 작성하세요.
  return (str1.length + str2.length) / 2
}
console.log(avgLength("Javascript", "연습공부"))
console.log(avgLength("코드캠프", ""))
console.log(avgLength("abc", "cdef"))

