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

var romanToInt = function (s) {
  var sum = [];
  (I = 1), (V = 5), (X = 10), (L = 50), (C = 100), (D = 500), (M = 1000);

  for (let i = 0; i <= s.length - 1; i++) {
    // if (s[i] == s[i + 1]) {
    //   sum += s[i];
    // } else if (s[i] < s[i + 1]) {
    //   sum += s[i + 1] - s[i];
    // }
    sum += s[i];
  }
  console.log(sum[1]);
};

// console.log(romanToInt('III'));
romanToInt('III');
