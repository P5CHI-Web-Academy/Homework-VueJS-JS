export const fib30 = function (numbers = [0, 1]) {
  if (numbers.length > 29) {
    return numbers
  }

  numbers.push(numbers.slice(-2).reduce((c, v) => c + v, 0))
  return fib30(numbers)
}

export const curryingSumWithClosingBrackets = function (x) {
  let result = x

  return function determineAction (y) {
    if (y === undefined) {
      return result
    } else {
      result += y
      return determineAction
    }
  }
}

export const curryingSumWithoutClosingBrackets = function (x) {
  let curry = (y) => {
    x += y
    return curry
  }

  curry.toString = () => x
  return curry
}
