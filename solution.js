function sum(value) {
  array = value.split('');
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  x = 0;
  for (let i = 0; i < array.length - 1; i++) {
    a += parseInt(array[i]);
    if (a < 10) {
      c = a;
      break;
    } else if (a > 10) {
      b = a.toString().split('');
      for (let v = 0; v <= b.length - 1; v++) {
        c += parseInt(b[v]);
      }
    }
  }
  console.log(c);
}
sum('493193');
