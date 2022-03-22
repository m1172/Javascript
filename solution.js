function cipher(value) {
  var arr =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
      ''
    );
  var index = 0;
  var array = value.split('');
  var x = '';
  for (let i = 0; i < array.length; i++) {
    if (arr.includes(array[i]) == false) {
      index = i;
      console.log(index);
    } else {
      const num = arr.indexOf(array[i]) + 13;
      x += arr[num];
      // x += 0;
    }
  }
  console.log(x);
}
cipher('Abw772Cd');
