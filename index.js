//1) GIVEN A STRING , REVERSE EACH WORD IN THE SENTENCE

// let str = "kya scene hai bhai ke";
// let result = str.split(" ").map(function (e) {
//   return e.split("").reverse().join("");
// });
// console.log(result);

//2) HOW TO CHECK IF AN OBJECT IS AN ARRAY OR NOT?

// function checkArray(elemt) {
//   return Array.isArray(elemt);
// }

// console.log(checkArray([]));
// console.log(checkArray({}));

//3) HOW TO EMPTY AN ARRAY IN JAVASCRIPT?

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.length = 0;

//4) HOW WOULD YOU CHECK IF AN NUMBER IS AN INTEGER?

// let a = 12.6;
// if (a % 1 === 0) {
//   console.log("integer");
// } else console.log("not integer");

//5) MAKE DUPLICATE:
//DUPLICATE([1,2,3,4]); O/P-[1,2,3,4,1,2,3,4]

// let arr = [1, 2, 3, 4];
// arr.concat(arr);

//------FUNCTION------

//6) WRITE A JS FUNCTION THAT REVERSE A NUMBER OF TIMES
//METHOD-1
// function revNum(num) {
//   return Number(num.toString().spilt().reverse().join(""));
// }
// let num = 12;

//METHOD-2
// function rev(numb) {
//   let rev = 0;
//   while (numb > 0) {
//     let rem = numb % 10;
//     rev = rev * 10 + rem;
//     numb = Math.floor(numb / 10);
//   }
//   return rev;
// }
// let result = rev(2345);
// console.log(result);

//7) WRITE A JS FUNCTION TO CHECK PASSED STRING IS PALINDROME OR NOT

// function checkString(arr) {
//   //   let first = arr.length;
//   let second = arr.split("").reverse().join("");
//   if (arr === second) {
//     return true;
//   }
// }

// let result = checkString("anna");
// if (result === true) {
//   console.log("palindrome");
// } else {
//   console.log("not palindrome");
// }

//8) - WRITE JS FUNC THAT RETURNS A PASSED STRING WITH LETTERS IN ALPHABETICAL ORDER

// function arrange(arr) {
//   return arr.split("").sort();
// }
// console.log(arrange("missisippie"));

//9)- WRITE JS FUNCTION THAT ACCEPT A STRING AS PARAMETER AND CONVERTS FIRST LETTER OF EACH WORD OF STRING IN UPPERCASE

// function convert(arr) {
//   let result = arr.split(" ").map(function (word) {
//     return word.charAt(0).toUpperCase() + word.substring(1);
//   });
//   let res = result.join(" ");
//   console.log(res);
// }
// convert("kya scene hai bhai ke");

//10) - WRITE A JS FUNCTION TO GET NUMBER OF OCCURANCE OF EACH LETTER IN SPECIFIED STRING

// function occ(str) {
//   let occurance = {};
//   str.split("").forEach(function (elem) {
//     if (occurance.hasOwnProperty(elem) === false) {
//       occurance[elem] = 1;
//     } else {
//       occurance[elem]++;
//     }
//   });
//   return occurance;
// }

// console.log(occ("apple"));

//11) LOPP AN ARRAY AND ADD ALL MEMBERS OF IT TO THE

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// arr.forEach(function (elem) {
//   sum = sum + elem;
// });
// console.log(sum);

//12) - IN AN ARRAY OF NUMBER AND STRING ONLY ADD THOSE DONT HAVE STRING

// let sum = 0;
// let arr = ["hello", 123, "hi", 322, "oh", "mm", 23, 43, 4];
// arr.forEach(function (elem) {
//   if (typeof elem === "number") {
//     sum = sum + elem;
//   }
// });
// console.log(sum);

// 13) - LOOP AN ARRAY OF OBJECTS AND REMOVE ALL OBJECTS WHICH DONT HAVE GENDER'S VALUE MALE

// let arr = [
//   { name: "proban", gender: "male" },
//   { name: "priya", gender: "female" },
//   { name: "govind", gender: "male" },
//   { name: "sushma", gender: "not specified" },
//   { name: "ankita", gender: "female" },
// ];

//METHOD-1
// let newData = arr.filter(function (elem) {
//   return elem.gender === "male";
// });
// console.log(newData);

//METHOD-2
// let count = 0;
// arr.forEach(function (elem) {
//   if (elem.gender !== "male") count++;
// });
// for (let i = 1; i <= count; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j].gender !== "male") {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);

//14)- JS FUNCTION TO CLONE ARRAY

//----METHOD - 1---
// function clonearray(arr) {
//   return [...arr];
// }
// let newCloned = clonearray([1, 2, 2, 34]);

//----METHOD - 2---
// function cloneArray(arr) {
//   let newArray = [];
//   arr.forEach(function (elem) {
//     newArray.push(elem);
//   });
//   return newArray;
// }
// let res = cloneArray([1, 2, 3, 4]);

//15) - WRITE A JS FUNCTION WHIHC ACCEPT AN ARGUEMENT AND RETURNS THE TYPE

// function arr(elem) {
//   return typeof elem;
// }

// console.log(arr([]));

//16) - WRITE A JS FUNCTION TO GET FIRST ELEMENT OF AN ARRAY. PASSING A PARAMETER 'N' WILL RETURN THE FIRST 'N' ELEMENTS OF THE ARRAY

// function retrieve(arr, n = 1) {
//   if (n <= arr.length) {
//     for (var i = 0; i < n; i++) {
//       console.log(arr[i]);
//     }
//   }
// }
// retrieve([1, 2, 3, 4, 5], 5);

//17) - JS PROG TO FIND MOST FREQUENT ITEM OF AN ARRAY

// function freq(arr) {
//   let freq = {};
//   arr.forEach(function (elem) {
//     if (freq.hasOwnProperty(elem)) {
//       freq[elem]++;
//     } else {
//       freq[elem] = 1;
//     }
//   });
//   let res = Object.keys(freq).reduce(function (curr, next) {
//     return freq[curr] > freq[next] ? curr : next;
//   });
//   console.log(res);
//   console.log(freq);
// }

// freq([1, 2, 2, 2, 3, 4, 1, 2, 3, 4]);

//18) - WRITE PROGRAM TO SHUFFLE ARRAY

// function random(arr) {
//   let rand = Math.floor(Math.random() * arr.length);
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr[i];
//     arr[i] = arr[rand];
//     arr[rand] = temp;
//   }
//   console.log(arr);
// }
// random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//19) - write a js prog to compute union of two arrays
//sample data: console.log(union[1,2,3],[100,2,1]);
//o/p - [1,2,3,100,2,1]

// function union(arr1, arr2) {
//   return [...new Set(arr1.concat(arr2))];
// }
// console.log(union([1, 2, 3, 4], [2, 3, 4, 5, 6, 7]));
