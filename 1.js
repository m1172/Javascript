// function number(value1) {
//   a = 0;
//   var value = value1.split('');

//   while (value.length > 1) {
//     a = 0;
//     value = value1.split('');
//     for (let i = 0; i < value.length; i++) {
//       a += parseInt(value[i]);
//     }
//     value1 = a.toString();
//   }
//   console.log(a);
// }

// number('132189');

function number(value1) {
  a = 0;
  var value = value1.split('');

  for (; value.length > 1; ) {
    a = 0;
    value = value1.split('');
    for (let i = 0; i < value.length; i++) {
      a += parseInt(value[i]);
    }
    value1 = a.toString();
  }
  console.log(a);
}

number('493193');
