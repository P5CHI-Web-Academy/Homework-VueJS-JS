// func(1)(2)(3)(4)

function func(a) {

  var sum = a;

  function f(b) {
    sum += b;
    return f;
  }

  f.toString = function() {
    return sum;
  };

  return f;
}

alert( func(1)(2)(3)(4) );

// func(1)(2)(3)(4)()

func(1)(2)(3)(4)()

//30 чисел фибоначчи с помощью рекурсии

function func(n) {
    return n <= 1 ? n : func(n - 1) + func(n - 2);
  }
  alert(func(30));
