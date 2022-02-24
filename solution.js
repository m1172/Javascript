function string(value) {
  array = value.split('');
  probel = value.split(' ');
  first = value.toUpperCase();
  let x = 0;
  let count = 0;
  if (probel.length < 3) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] == first[j]) {
          x++;
        }
        if (array[i] == array[j]) {
          count++;
        }
      }
    }
    if (probel.length == 2) {
      console.log(count - array.length + 2 == x);
      console.log('1');
    } else {
      console.log(count - array.length + 1 == x);
    }
  } else {
    console.log(false);
  }
}
string('Hel a');
