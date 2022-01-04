function box(value) {
  array = value.split(',');
  if (array[0] == 0) {
    console.log(0);
  } else {
    console.log(array[0] * array[1] - 1);
  }
  //   console.log(square);
}

box('0,0');
