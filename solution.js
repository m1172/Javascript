function biggest(value) {
  for (let i = 0; i < value.length; i++) {
    var num = value.split('');
    var a = Math.max(...num);

    num.filter((value) => value !== a);
    console.log(a);
  }
}

biggest('42145');
