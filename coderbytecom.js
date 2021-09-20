function FirstFactorial(num) {
  var a = 1;
  for (let i = num; i > 0; i--) a *= i;
  return a;
}

console.log(FirstFactorial(8));
