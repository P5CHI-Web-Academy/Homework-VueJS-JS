export function sumFn(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return (a || 0) + (b || 0) + (c || 0) + (d || 0)
      }
    }
  }
}

export const sumFnArrow = a => b => c => d =>
  (a || 0) + (b || 0) + (c || 0) + (d || 0)

// different approach
// export const sumFnArrow = (a = 0) => (b = 0) => (c = 0) => (d = 0) =>
//   a + b + c + d

export const sumFnInfinity = n => i =>
  Number.isInteger(i) ? sumFnInfinity(i + n) : n
