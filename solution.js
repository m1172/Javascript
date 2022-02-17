function comp(a, b) {
  var first = 0;
  var second = 0;
  for (let i = 0; i < a.length; i++) {
    first = Math.pow(a[i], 2);
    if (b.includes(first) != false) {
      second++;
    }
  }
  console.log(second == b.length);
}

comp(
  [121, 144, 19, 161, 19, 144, 19, 11],
  [121, 14641, 20736, 361, 25921, 361, 20736, 361]
);
