function name(nums) {
  let max_num = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    if (num > max_num) {
    }
  }
  return max_num;
}

var array = [8, 6, 2, 1, 4, 5];
var b = array[0];
array[0] = array[3];
array[3] = b;

console.log(array);
