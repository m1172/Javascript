// function prime(tub) {
//     for(let i = 2; i < tub; i++)
//       if(tub % i === 0) return false;
//     return tub > 1;
//   }

//   console.log(prime(29));

// function sum(all) {
//   var a=0;
//   for(var i=1; i<all; i++){
//    if (i%3 ===0 || i%5===0) {
//      a+=i
//      }
//    }
//   console.log(a);
// }
// sum(10);
// console.log(sum(18));

// function last(str,last) {
//   console.log(str.endsWith(last));
// }
// last('aqlli','li');

// function last(str,last){
// console.log(str.lastIndexOf(last)>0);
// }
// last('kitob','')

// function last(str, last) {
//   for (let i = 0; i < str.length; i--) return str.indexOf(last, i) >= 0;
// }
// console.log(last('kitob', 'to'));

// function array(soz) {
//   var unli = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < unli.length; i++) {
//     var un = unli[i];
//     console.log(soz.includes(unli[i]));
//   }
// }
// array('muhammadali');

// function vowel(str) {
//   var unli = ['a', 'e', 'i', 'o', 'u'];
//   arr = str.split('');
//   let count = 0;
//   arr.forEach((harf) => {
//     if (unli.includes(harf) !== false) {
//       count++;
//     }
//   });
//   console.log(count);
// }
// vowel('muhammadali');

// function harf(str, b) {
//   var a = b.split('');
//   arr = str.split('');
//   let count = 0;
//   arr.forEach((harf) => {
//     if (a.includes(harf) !== false) {
//       count++;
//     }
//   });
//   return str.length === count;
// }
// console.log(harf('abc', 'bca'));

// const ochirish = (ar, raqam) => {
//   const yangi = ar.filter((value) => value != raqam);
//   console.log(yangi);
// };

// ochirish([1, 2, 2, 2, 3], [2]);
// let number;
// function raqam(num) {
//   var a = num.toString().split('');
//   var b = 0;
//   // a[(1, 5, 3, x)];
//   for (let i = 0; i < a.length; i++) {
//     b += Number(a[i]) ** a.length;

//     number = b;
//   }

//   return number;
// }
// console.log(raqam(153));

// function alifbo(values) {
//   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   let value = values.toLowerCase().split('');
//   value.forEach((e) => {
//     if (alphabet.indexOf(e) !== -1) {
//       console.log(alphabet.indexOf(e) + 1);
//     }
//   });
// }
// alifbo("The sunset sets at twelve o'clock. ");

// function raqam(value) {
//   a = value.split('');
//   var max = 0;
//   var result = 0;

//   a.forEach((value) => {
//     if (max < value) {
//       max = value;
//     }
//   });
//   for (let i = 0; i < a.length; i++) {
//     if (i < a.length - 3) {
//       //i =12 a.lenght=14(12<14-3)
//       if (a[i] === max) {
//         //a[i]=9  max=9 (agar( teng bolsa 9ga ) bajar)
//         result = max * 1000 + a[i + 1] * 100 + a[i + 2] * 10 + a[i + 3] * 1;
//       }
//     }
//   }
//   console.log(result);
//   // console.log(a);
// }
// raqam('203712123456978');

// function ipv(value) {
//   var b = 0;
//   var count = 0;
//   var a = value.split('.');
//   for (let c = 0; c < a.length; c++) {
//     if (a[c] > 0) {
//       b++;
//     }
//   }
//   if (b == 4) {
//     for (let i = 0; i <= 3; i++) {
//       if (a[i] < 255) {
//         if (a[i].indexOf(0) != 0) {
//           count++;
//         }
//       }
//     }
//   }
//   console.log(count == 4);
// }
// ipv('123.123.123.');

// function round(value) {
//   x = value.split('.');
//   a = value.split('.')[1];
//   b = a.split('')[0];
//   if (b >= 5) {
//     console.log(++x[0]);
//   } else if (b < 5) {
//     console.log(x[0]);
//   }
// }

// round('1.56426');

// function find(value) {
//   a = value.split(',');
//   farq1 = 0;
//   farq2 = 0;
//   index = 0;
//   counter = 0;

//   farq1 = a[1] - a[0];
//   for (let i = 0; i < a.length - 1; i++) {
//     farq2 = a[i + 1] - a[i];
//     if (farq1 != farq2) {
//       index = i;
//       counter++;
//     }
//   }
//   // console.log(counter);
//   console.log(a[index]);
//   if (counter > 1) {
//     console.log(parseInt(a[index]) + parseInt(farq1));
//   } else if (counter == 1) {
//     console.log(parseInt(a[0]) + parseInt(farq1 / 2));
//   }
// }
// find('3,7,9,11,13');
// find('1,5,7');

function order(value1) {
  var value = value1.join('');
  console.log(value);
  var index = 0;
  var counter = 0;
  for (let i = 0; i < value.length; i++) {
    if (value.includes(value[i]) !== true) {
      index = i;
      counter++;
      if (counter % 2 != 0) {
        console.log());
      }
    }
  }
}
order([1, 2, 3, 1, 2, 3, 4, 3]);
