function biggest(value) {
  array = value.split('');
  var index = 0;
  var max = 0;
  var temp = 0;
  for (let i = 0; i < array.length; i++) {
    max = array[i];
    for (let x = i; x < array.length; x++) {
      if (max < array[x]) {
        index = x;
        max = array[x];
      }
    }
    if (max !== array[i]) {
      temp = array[i];
      array[i] = max;
      array[index] = temp;
    }
  }
  console.log(array);
}
biggest('942861749521');
