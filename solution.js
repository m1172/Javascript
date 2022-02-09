function alphabet(value) {
  var array = value.split('');
  max = 0;
  temp = 0;
  index = 0;
  for (let i = 0; i < array.length; i++) {
    max = array[i];
    for (let x = i; x < array.length; x++) {
      if (max > array[x]) {
        index = x;
        max = array[x];
      }
    }
    if (array[i] != max) {
      temp = array[i];
      array[i] = max;
      array[index] = temp;
    }
  }
  console.log(array);
  //   console.log(array.reverse());
}
alphabet('faaksjdwhywtfghajdbu');
