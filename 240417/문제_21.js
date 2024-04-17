/* 다음 find() 메서드를 for문으로 만들어 보세요. */

const find = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      return array[i];
    }
  }
};
console.log(find([1, 3, 5, 7]), (v, i) => { return v > 1; });
