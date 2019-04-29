// Sum of 4 parameters;

const sum = a => b => c => d => a + b + c + d;

console.log(sum(2)(3)(1)(5)); // 11



// Sum of n parameters; 

const add = num => {
  const adder = n => {
    if (n !== undefined) {
      num += n;
      return adder;
    } else {
      return num;
    }
  }
  return adder;
}

console.log(add(1)(3)(4)(5)()); // 13



// First 30 numbers of Fibonacci

const fib = (x) => {
    return x <= 1 ? x : fib(x - 1) + fib(x - 2);
}
  
const determineFibNumbers = (n) => {
    const arr = [];
    
    for (let i = 0; i < n; i++) {
      arr.push(fib(i));
    }
   
    return arr;
};
  
console.log(determineFibNumbers(30));

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229]



// Codewars nickname: HobbitJS