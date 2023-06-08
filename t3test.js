function memoize (expensiveFn) {}

// Do not modify from below
function expensiveFn (callbackFn) {
  setTimeout(() => callbackFn('movies list'), 30)
}

const memoizedExpensiveFn = memoize(expensiveFn)
// const memoizedExpensiveFn = expensiveFn

let t1 = Date.now()
memoizedExpensiveFn(result => {
  let t2 = Date.now()
  console.log(`Response received: ${result} in ${t2 - t1}ms`)
  // Response received: movies list in 30ms
})

setTimeout(() => {
  let t1 = Date.now()
  memoizedExpensiveFn(result => {
    let t2 = Date.now()
    console.log(`Response received: ${result} in ${t2 - t1}ms`)
    // Response received: movies list in 0ms
  })
}, 100)

// output :
// Response received: movies list in 44ms
// Response received: movies list in 0ms
