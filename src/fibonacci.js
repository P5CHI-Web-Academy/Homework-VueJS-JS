// calculate fibonacci element at certain index
function fib (n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

// push fibonacci elements in an array until the specified index
export const fibSequence = function (num) {
  const sequence = []
  for (let i = 0; i < num; i++) {
    sequence.push(fib(i))
  }
  return sequence
}
