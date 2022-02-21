function number(value) {
  array = value.split('');
  var max = 0;
  for (let i = 0; i < array.length - 4; i++) {
    if (max < value.slice(i, i + 5)) {
      max = value.slice(i, i + 5);
    }
  }
  console.log(max);
}

number('2999993945739899826');
