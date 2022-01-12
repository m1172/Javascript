// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function prime(tub) {
  for (let i = 2; i < tub; i++) if (tub % i === 0) return false;
  return tub > 1;
}
console.log(prime(29));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function sum(all) {
  var a = 0;
  for (var i = 1; i < all; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      a += i;
    }
  }
  console.log(a);
}
sum(10);

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// strEndsWith('abc', 'bc') -- returns true
// strEndsWith('abc', 'd') -- returns false

function last(str, last) {
  console.log(str.endsWith(last));
}
last('aqlli', 'li');

function last(str, last) {
  console.log(str.lastIndexOf(last) > 0);
}
last('kitob', 'ob');

function last(str, last) {
  for (let i = 0; i < str.length; i--) return str.indexOf(last, i) >= 0;
}
console.log(last('kitob', 'to'));

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function array(soz) {
  var unli = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < unli.length; i++) {
    var un = unli[i];
    console.log(soz.includes(unli[i]));
  }
}
array('muhammadali');

function vowel(str) {
  var unli = ['a', 'e', 'i', 'o', 'u'];
  arr = str.split('');
  let count = 0;
  arr.forEach((harf) => {
    if (unli.includes(harf) !== false) {
      count++;
    }
  });
  console.log(count);
}
vowel('muhammadali');

// function(abc,bca) =true
function harf(str, b) {
  var a = b.split('');
  arr = str.split('');
  let count = 0;
  arr.forEach((harf) => {
    if (a.includes(harf) !== false) {
      count++;
    }
  });
  return str.length === count;
}
console.log(harf('abc', 'bca'));

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const deleted = (ar, raqam) => {
  const yangi = ar.filter((value) => value != raqam);
  console.log(yangi);
};

deleted([1, 2, 2, 2, 3], [2]);

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

let number;
function raqam(num) {
  var a = num.toString().split('');
  var b = 0;
  // a[(1, 5, 3, x)];
  for (let i = 0; i < a.length; i++) {
    b += Number(a[i]) ** a.length;
    number = b;
  }
  return number;
}
console.log(raqam(153));

// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabet_position("The sunset sets at twelve o' clock.");
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alifbo(values) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let value = values.toLowerCase().split('');
  value.forEach((e) => {
    if (alphabet.indexOf(e) !== -1) {
      console.log(alphabet.indexOf(e) + 1);
    }
  });
}
alifbo("The sunset sets at twelve o'clock. ");

// In the following 6 digit number:
// 283910
// 91 is the greatest sequence of 2 consecutive digits.
// In the following 10 digit number:
// 1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
// Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

function raqam(value) {
  a = value.split('');
  var max = 0;
  var result = 0;

  a.forEach((value) => {
    if (max < value) {
      max = value;
    }
  });
  for (let i = 0; i < a.length; i++) {
    if (i < a.length - 3) {
      //i =12 a.lenght=14(12<14-3)
      if (a[i] === max) {
        //a[i]=9  max=9 (agar( teng bolsa 9ga ) bajar)
        result = max * 1000 + a[i + 1] * 100 + a[i + 2] * 10 + a[i + 3] * 1;
      }
    }
  }
  console.log(result);
}
raqam('203712123456978');

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

function ipv(value) {
  var b = 0;
  var count = 0;
  var a = value.split('.');
  for (let c = 0; c < a.length; c++) {
    if (a[c] > 0) {
      b++;
    }
  }
  if (b == 4) {
    for (let i = 0; i <= 3; i++) {
      if (a[i] < 255) {
        if (a[i].indexOf(0) != 0) {
          count++;
        }
      }
    }
  }
  console.log(count == 4);
}
ipv('123.123.123.');

function round(value) {
  x = value.split('.');
  a = value.split('.')[1];
  b = a.split('')[0];
  if (b >= 5) {
    console.log(++x[0]);
  } else if (b < 5) {
    console.log(x[0]);
  }
}

round('1.56426');

// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
// Example
// find_missing((const int[]){1,3,5,9,11}, 5)  => 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

function find(value) {
  a = value.split(',');
  farq1 = 0;
  farq2 = 0;
  index = 0;
  counter = 0;

  farq1 = a[1] - a[0];
  for (let i = 0; i < a.length - 1; i++) {
    farq2 = a[i + 1] - a[i];
    if (farq1 != farq2) {
      index = i;
      counter++;
    }
  }

  if (counter > 1) {
    console.log(parseInt(a[0]) + parseInt(farq1 / 2));
  } else if (counter == 1) {
    if (a.length == 3) {
      if (a[1] - a[0] > a[2] - a[1]) {
        console.log(parseInt(farq1 / 2) + parseInt(a[0]));
      } else console.log(parseInt(a[1]) + parseInt(farq1));
    } else console.log(parseInt(a[index]) + parseInt(farq1));
  }
}
// find('3,7,9,11,13');
find('1,5,7');

// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function order(value) {
  var a = 0;
  var chosenvalue = 0;
  for (let i = 0; i < value.length; i++) {
    for (let x = 0; x < value.length; x++) {
      if (value[i] == value[x]) {
        chosenvalue = value[i];
        a++;
      }
    }
    if (a % 2 == 1) {
      console.log(chosenvalue);
      break;
    }
  }
}

order([1, 2, 2, 3, 3, 3, 4, 4, 5, 3, 3, 3, 2, 2, 1]);

// Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
// Describe(Breaking_chocolate_problem)
// {
//     It(Fixed_tests)
//     {
//         Assert::That(break_chocolate(5, 5), Equals(24));
//         Assert::That(break_chocolate(7, 4), Equals(27));
//         Assert::That(break_chocolate(1, 1), Equals(0));
//         Assert::That(break_chocolate(0, 0), Equals(0));
//         Assert::That(break_chocolate(6, 1), Equals(5));
//     }
// };
// int break_chocolate(int n, int m){
//   return
// }

function box(value) {
  array = value.split(',');
  if (array[0] == 0) {
    console.log(0);
  } else {
    console.log(array[0] * array[1] - 1);
  }
}

box('0,0');

// As you probably know, Fibonacci sequence are the numbers in the following integer sequence: 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last digit from fibonacci number. Example: getLastDigit(15) - 610. Your method must return 0 because the last digit of 610 is 0. Fibonacci sequence grows very fast and value can take very big numbers (bigger than integer type can contain), so, please, be careful with overflow.

function fibonacci(value) {
  x = [0, 1];

  for (let i = 0; i < 20; i++) {
    x.push(x[i] + x[i + 1]);
  }
  number = x[value];
  string = number.toString().split('');
  console.log(string[string.length - 1]);
}

fibonacci(14);
