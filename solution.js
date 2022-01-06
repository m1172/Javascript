function brackets(value) {
  a = value.split('');
  counter = 0;
  test = 0;
  index = a.length - 1;
  if (a[0].includes(')') || a.includes('(', index)) {
    console.log('false');
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i].includes('(')) {
        counter++;
      }
      if (a[i].includes(')')) {
        counter--;
        if (counter < 0 != false) {
          test++;
        }
      }
    }
    console.log(test == 0);
  }
}
brackets(')(())()');
