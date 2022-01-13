function sum(value) {
  array = value.split('');
  a = 0;
  b = 0;
  c = 0;
  d = 0;
  x = 0;
  for (let i = 0; i < array.length; i++) {
    a += parseInt(array[i]);
  }
  if (a < 10) {
    console.log(a);
  } else {
    b = a.toString().split('');
    for (let i = 0; i < b.length; i++) {
      c += parseInt(b[i]);
    }

    if (c < 10) {
      console.log(c);
    } else {
      d = c.toString().split('');
      for (let i = 0; i < d.length; i++) {
        x += parseInt(d[i]);
      }
      console.log(x);
    }
  }
}
sum('493193');
