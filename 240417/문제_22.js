/* filter() 메서드도 for문으로 만들어 보세요 */

const fillter = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(fillter([1, 3, 5, 7]), (v, i) => v > 1)
