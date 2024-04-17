/* 문제_24번에서 작성한 코드를 some()이나 every() 메서드 대신 for문으로 작성해 보세요. */
const array = [null, 'hello', null, undefined, false];

let result;
for (let i in array) {
  if (array[i] !== null) {
    result = true;
    break;
  } else {
    result = false;
  }
}