function fibonacci(value) {
  x = [0, 1];

  for (let i = 0; i < 20; i++) {
    x.push(x[i] + x[i + 1]);
  }
  number = x[value];
  string = number.toString().split('');
  console.log(string[string.length - 1]);
}

fibonacci(14);
