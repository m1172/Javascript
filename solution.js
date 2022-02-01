function biggest(value) {
  var num = value.split('');
  for (let i = 0; i < num.length; i++) {
    if ((num[i] = num[i + 1])) {
      console.log(num[i]);
    }
  }
}

biggest('42145');
