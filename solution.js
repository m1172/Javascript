function comp(a, b) {
  var number = 0;
  var square = 0;
  for (let i = 0; i < a.length; i++) {
    number += a[i] * a[i];
    square += b[i];
  }

  console.log(number == square);
}

comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361]
);
