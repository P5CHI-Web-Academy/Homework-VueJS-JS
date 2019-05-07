export default function fibonacci(n = 0, acc = []) {
  if (n === 0) return acc

  const length = acc.length

  if (length === 0) acc.push(0)
  else if (length === 1) acc.push(1)
  else acc.push(acc[length - 2] + acc[length - 1])

  return fibonacci(--n, acc)
}
