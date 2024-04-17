function adder(num) {
  // 여기에 코드를 작성하세요.
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i
  }
  return sum
}

console.log(adder(5))