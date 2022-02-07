// 23. create a sum()

// Create a sum(), which makes following possible

// const sum1 = sum(1)
// sum1(2) == 3 // true
// sum1(3) == 4 // true
// sum(1)(2)(3) == 6 // true
// sum(5)(-1)(2) == 6 // true

/**
 * @param {number} num
 */

// #1
function sum(num) {
  const func = num2 => sum(num + num2)

  // func.toString = () => num
  func.valueOf = () => num

  return func
}

const sum1 = sum(1)
console.log(sum1(2) == 3) // true
console.log(sum1(3) == 4) // true
console.log(sum(1)(2)(3) == 6) // true
console.log(sum(5)(-1)(2) == 6) // true
console.log(sum(5)(-1)(2) == 5) // false
