// function FirstFactorial(num) {
//   var a = 1;
//   for (let i = num; i > 0; i--) a *= i;
//   return a;
// }

// console.log(FirstFactorial(8));

// var K, N;
// function Solution(N, K) {
//   var newStr,
//     count,
//     x = 0;

//   for (let i = 0; (i = K) && x < 3; i++) {
//     var str = N.toString();
//     count = Number.parseInt(str[x]);
//     if (count === 9) {
//       x += 1;
//     } else {
//       newStr = str.slice(0, x) + (count + 1).toString() + str.slice(x + 1);
//       if (Number.parseInt(newStr) > N) {
//         N = Number.parseInt(newStr);
//         K -= 1;
//       }
//     }
//   }
//   return N;
// }
// N = 100;
// K = 30;
// console.log(Solution(N, K));

// var cleanRoom = function (robot) {
//   let dir = 0;

//   const cleaned = {};
//   const flipDir = (d) => (d + 2) % 4;
//   const turnRight = () => {
//     robot.turnRight();
//     dir = (dir + 1) % 4;
//   };
//   const setDir = (newDir) => {
//     while (dir !== newDir) turnRight();
//   };

//   const recurse = (x, y, moveDir) => {
//     robot.clean();

//     if (cleaned[x + ' : ' + y] === true) return;
//     moveDir >= 0 && setDir(moveDir);

//     if (moveDir >= 0 && !robot.move()) {
//       return;
//     } else {
//       cleaned[x + ' : ' + y] = true;

//       // visit all non-clean adjacent squares
//       recurse(x, y - 1, 0);
//       recurse(x + 1, y, 1);
//       recurse(x, y + 1, 2);
//       recurse(x - 1, y, 3);
//     }

//     // move back to our last square
//     moveDir >= 0 && setDir(flipDir(moveDir));
//     moveDir >= 0 && robot.move();
//   };

//   recurse(0, 0, -1);
// };

// var A = [7, 5, 2, 7, 2, 7, 4, 7];

// function solution(A) {
//   array = new Array();
//   for (i = 1; i < A.length - 1; i++) {
//     if (A[i - 1] < A[i] && A[i + 1] < A[i]) {
//       array.push(i);
//     }
// }

//console.log(A);
//console.log(array);
//   var position = array[0];
//   var counter = 1;
//   var len = array.length;
//   for (var i = 0; i < len; i++) {
//     if (Math.abs(array[i + 1] - position) >= len) {
//       position = array[i + 1];
//       counter++;
//     }
//   }

//   console.log('total:', counter);
//   return counter;
// }
// solution(A);
