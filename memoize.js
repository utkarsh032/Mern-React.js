// const square = n => {
//   const memoize = {}
//   // return n ** 2
//   if (memoize[n] == undefined) {
//     memoize[n] = n ** 2
//     console.log('calculated', n ** 2)
//     return n ** 2
//   } else {
//     console.log('memoize', memoize[n])
//     return memoize[n]
//   }
// }

const memoizeFun = () => {
  const memoize = {}
  return n => {
    if (memoize[n] == undefined) {
      memoize[n] = n ** 2
      console.log('calculated', n ** 2)
      return n ** 2
    } else {
      console.log('memoize', memoize[n])
      return memoize[n]
    }
  }
}

const square = memoizeFun()

console.log(square(2))
console.log(square(3))
console.log(square(2))
console.log(square(3))

// JS execution behavior
// Asynch & defer script attribute
// qualiphil
// How Promises => then/catch asynch/await


