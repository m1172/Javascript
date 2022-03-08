function string(value) {
  array = value.toUpperCase().split('');
  probel = value.split(' ');
  let count = 0;
  if (probel.length < 3) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[i] == array[j]) {
          count++;
        }
      }
    }
    if (probel.length == 2) {
      console.log(count == array.length);
      console.log('1');
    } else {
      console.log(count == array.length + 1);
    }
  } else {
    console.log(false);
  }
}
string('jelCc kba');
