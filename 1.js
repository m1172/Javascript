// function name(nums) {
//   let max_num = Number.NEGATIVE_INFINITY;
//   for (let num of nums) {
//     if (num > max_num) {
//     }
//   }
//   return max_num;
// }

// var array = [8, 6, 2, 1, 4, 5];
// var b = array[0];
// array[0] = array[3];
// array[3] = b;

// console.log(array);

// a = 'hello  ';
// console.log(a.length);

// var arr = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'.toUpperCase();
// console.log(arr);

var k, n;

function maxNumber(n, k) {
  var i, str, new_n_str, tmp;
  i = 0;

  while (k > 0) {
    str = n.toString();
    tmp = Number.parseInt(str[i]);
    console.log(str[i]);
    if (tmp === 9) {
      i += 1;
    } else {
      new_n_str = str.slice(0, i) + (tmp + 1).toString() + str.slice(i + 1);

      if (Number.parseInt(new_n_str) > n) {
        n = Number.parseInt(new_n_str);
        k -= 1;
      }
    }
  }

  return n;
}

n = 251;
k = 12;
console.log(maxNumber(n, k));
