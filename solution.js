// function fibonacci(value) {
//   save = 0;
//   a = 0;
//   b = 1;
//   for (let i = 0; i < 30; i++) {
//     c = a + b;
//   }
//   console.log(c);
// }

// fibonacci();
c = [];
a = 0;
b = 1;
x = [];
d = [];
for (let i = 0; i < 5; i++) {
  c += a + b;
  x += c;
  d = x[i] + x[i - 1];
  console.log(d);
}
console.log(d);
