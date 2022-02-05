// 3. implement Array.prototype.flat()

// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]
// follow up

// Are you able to solve it both recursively and iteratively?

// #1
const flat = (arr = [], depth = 1) => {
  let result = []

  for (let item of arr) {	
    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1))
    } else {
      result.push(item)
    }
  }

  return result
}


const arr = [1, [2], [3, [4]]];

console.log(flat(arr)) // [1, 2, 3, [4]]

console.log(flat(arr, 1)) // [1, 2, 3, [4]]

console.log(flat(arr, 5)) // [1, 2, 3, 4]
