function cipher(value) {
  var arr =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
      ''
    );
  var array = value.split('');
  var x = '';
  for (let i = 0; i < array.length; i++) {
    const num = arr.indexOf(array[i]) + 13;
    x += arr[num];
  }
  console.log(x);
}
cipher('TesT');
