/* forEach() 메서드를 사용한 코드를 for문으로 바꿔 보세요. */
const array = [1, 3, 5, 7]
array.forEach((number, index) => {
  console.log(number, index)
})

for (let i in array) {
  console.log(array[i], i)
}