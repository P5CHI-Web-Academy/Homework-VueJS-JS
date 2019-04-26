export const sum2 = function (num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return num1 + num2 + num3 + num4
      }
    }
  }
}
