// let a = 2252;

// rev = Number(String(a).split('').reverse().join(''));

// console.log(a == rev);

// l1 = l1.reverse().join('');
// l2 = l2.reverse().join('');
// l3 = eval(l1) + eval(l2);

// return l3.toString().split('').reverse();

// var addTwoNumbers = function (l1, l2) {
//   var a = l1.reverse().join('');
//   var b = l2.reverse().join('');
//   var c = eval(a) + eval(b);
//   var d = c.toString().split('').reverse();
//   return d;

// };

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));

// var romanToInt = function (s) {
//   sum = [];
//   var check = true;
//   count = 0;
//   var I = 1,
//     V = 5,
//     X = 10,
//     L = 50,
//     C = 100,
//     D = 500,
//     M = 1000;
//   var array = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
//   var roman = [I, V, X, L, C, D, M];

//   for (let i = 0; i <= s.length - 1; i++) {
//     for (let y = 0; y < array.length; y++) {
//       if (s[i] == array[y]) {
//         sum.push(roman[y]);
//       }
//     }
//   }
//   console.log(sum);
//   for (let x = 0; x <= sum.length - 1; x++) {
//     if (sum.length === 1) {
//       console.log(sum[0]);
//     } else {
//       if (sum[x] >= sum[x + 1]) {
//         count += sum[x];
//       } else if (sum[x] < sum[x + 1]) {
//         count += sum[x + 1] - sum[x];
//         // check = false;
//         x++;
//       } else if (sum[sum.length - 2] >= sum[sum.length - 1]) {
//         count += sum[sum.length - 1];
//       }
//     }
//   }
// };

// // console.log(romanToInt('III'));
// romanToInt('D');

function Substring(value) {
  var count = 0;

  for (let i = 0; i <= value.length; i++) {
    if (value[i] !== value[i + 1]) {
      i++;
      count++;
    }
  }
  console.log(count);
}

Substring('abcabcbb');
