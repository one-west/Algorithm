/* 다음 배열에 하나라도 null이 아니면 true를 반환하고, 아니면 false를 출력하는 코드를 작성하세요. */

const array = [null, 'hello', null, undefined, false];
array.some(value => value !== null);
