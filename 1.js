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

// var k, n;

// function maxNumber(n, k) {
//   var i, str, new_n_str, tmp;
//   i = 0;

//   while (k > 0) {
//     str = n.toString();
//     tmp = Number.parseInt(str[i]);
//     console.log(str[i]);
//     if (tmp === 9) {
//       i += 1;
//     } else {
//       new_n_str = str.slice(0, i) + (tmp + 1).toString() + str.slice(i + 1);

//       if (Number.parseInt(new_n_str) > n) {
//         n = Number.parseInt(new_n_str);
//         k -= 1;
//       }
//     }
//   }

//   return n;
// }

// n = 251;
// k = 12;
// console.log(maxNumber(n, k));

// var index = 0;
// var count = 0;
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let x = i; x < nums.length - 1; x++) {
//       if (nums[i] + nums[x + 1] == target) {
//         index = i;
//         count = x;
//       }
//       // console.log(nums[i] + nums[x + 1]);
//     }
//   }
//   console.log(index, count + 1);
// }
// twoSum([1, 2, 3, 7], 10);

function func(n, k) {
  var count = 0;
  var a = 0;
  var num = '';
  for (let i = 0; i < n.length; i++) {
    a = k[i];
    for (let x = i; x < k.length; x++) {
      count = n[x];

      num = n[a];
    }
  }
  console.log(num);
}
func([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]);
