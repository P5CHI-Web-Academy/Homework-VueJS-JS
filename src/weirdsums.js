export const weirdsum1 = function (arg1) {
  return function (arg2) {
    return function (arg3) {
      return function (arg4) {
        return function () {
          return arg1 + arg2 + arg3 + arg4
        }
      }
    }
  }
}

export const weirdsum2 = function (arg1) {
  return function (arg2) {
    return function (arg3) {
      return function (arg4) {
        return arg1 + arg2 + arg3 + arg4
      }
    }
  }
}
