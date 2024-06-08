console.log ('---- Task 4.1 ----');
// function tellFortune (a,b,c,d) {
//     console.log ("You will be " + a + " in " + b + " and married to " + c + " with " + d + " kids." )
// }
// tellFortune ('software engineer', 'Jordan' , 'Alice' , 'no');
console.log ('---- Task 4.2 ----');
// function calculateDogAge (humanYears) {
//     let dogYears = 7 * humanYears ; 
//     console.log ( "Your doggie is " + dogYears + " years old in dog years!");
// }
// calculateDogAge (2);
console.log ('---- Task 4.3 ----');
// function calculateSupply (age, amountPerDay) {
//     let maxAge = 100;
//     let nextYears = maxAge - age ;
//     let totalAmount = 365 * amountPerDay * nextYears;
//     console.log ("You will need " + totalAmount +" cups of tea to last you until the ripe old age of "+ maxAge);
// }
// calculateSupply (30,3);
console.log ('---- Task 4.4 ----');
// function greet (name) {
//     console.log ('Hello ' + name);
// }
// greet ('Rahaf');
console.log ('---- Task 4.5 ----');
// what is the error:
// function double(cat) {
//   return 2 * x;
// } x is not declared, the answer will be : undefined.

// function double(7) {
//   return 2 * 7;
// }

// function double('7') {
//   return 2 * 'x';
// }
// */
console.log ('---- Task 4.6 ----');
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
} // (x)

functiondouble2 x)
return 2 * x;
}// (x)

function (x) double3 {
  return 2 * x;

*/ // double3(x)
console.log ('---- Task 4.7 ----');
// function cube(n) {
//     console.log (n*n*n);
// }
// cube (4);
console.log ('---- Task 4.8 ----');
// function multiply (a,b) {
//     console.log (a*b);
// }
// multiply (3,4);
console.log ('---- Task 4.9 ----');
// function canIGetADrivingLicense(age){
//     if (age >= 20) {
//         console.log ('yes you can');
//     }
//     if (age < 20) {
//         let restYears = 20 - age ;
//         console.log ('please come back after ' + restYears +  ' years to get one ');
//     }
// }
// canIGetADrivingLicense (12);
console.log ('---- Task 4.10 ----');
// function sameLength (st1,st2) {
// if ("st1".length == "st2".length )
//   {
//     console.log ('True');
//   }
// else {
//   console.log ('False');

// }  
// }
// sameLength ("tree","clue");
console.log ('---- Task 4.11 ----');
// function largerNubmer (a,b) {
//   if (a > b) {
//     console.log (a);
//   }
//   else {
//     console.log (b);
//   }
//   console.log ('');
// }
// largerNubmer (5,6);
console.log ('---- Task 4.12 ----');
// function smallerNubmer (a,b,c) {
//   let minNumber = arguments[0];
//   for (let i = 1; i < 4; i++) {
//       if (arguments[i] < minNumber) {
//         minNumber = arguments[i];
//       }
//   }
//   return minNumber;
//   console.log();
// }
// smallerNubmer (6,1,9);
console.log ('---- Task 4.13 ----');
// function shorterString (a,b,c,d,e) {
//   let strings = [a,b,c,d,e];
//   let shortestString = strings [0];
//   for (let i = 1; i < strings.length; i++) {
//     if (strings[i].length < shortestString.length) {
//       shortestString = strings[i];
//     }
// }
// return shortestString ;
// }
// console.log(shorterString ("air","school","car","by","github"));
console.log ('---- Task 4.14 ----');
// function longerString (a,b,c,d) {
//   let strings = [a,b,c,d];
//   let longestString = strings [0];
//   for (let i=1 ; i< strings.length ; i++ ){
//     if (strings [i].length > longestString.length ){
//       longestString = strings [i];
//     }
//   }
//   return longestString;
// }
// console.log (longerString("air","github","school","car"));
console.log ('---- Task 4.15 ----');
// function isEven (num) {
//   if (num % 2 == 0)
//     return true;
//   else 
//   return false;
// }
// console.log (isEven (7));
console.log ('---- Task 4.16 ----');
// function isOdd (num) {
//   if ( num % 2 != 0)
//     return true;
//   else
//   return false;
// }
// console.log (isOdd (6));
console.log ('---- Task 4.17 ----');
// function positive (num) {
//   if (num >= 0) {
//     return num;
//   }
// else{
//   return num*-1 ;
// }
// }
// console.log (positive(5));
// console.log (positive(-6));
console.log ('---- Task 4.18 ----');
// function fullName (firstName,lastName) {
//   console.log (firstName + lastName);
// }
// fullName ('Rahaf ','Duhaimesh');
console.log ('---- Task 4.19 ----');
// function average (a,b,c,d,e) {
//   let averageNum = (a + b + d + e + c) / 5;
//   return averageNum;
// }
// console.log (average (1,2,3,4,5));
// console.log (average(5,7,9,3,5));
console.log ('---- Task 4.20 ----');
// function randomNumber (){
//   let x = Math.random().toPrecision(5);
//   console.log (x);
// }
// randomNumber ();
console.log ('---- Task 4.21 ----');
// function randomBetweenNumbers (a,b) {
//   return Math.random().toPrecision(5) * (b - a) + a ;
// }
// randomBetweenNumbers (5,9);
console.log ('---- Task 4.22 ----');
// function scoreInUniversty(score) {
//   if (score < 50 )
//     return 'F';
//   else if (score >= 50 && score <= 69)
//     return 'D';
//   else if (score >= 70 && score <= 84)
//     return 'C';
//   else if (score >= 85 && score <= 94)
//     return 'B';
//   else if (score >= 95 && score <= 100)
//     return 'A';
// }
// console.log (scoreInUniversty(57));
// console.log (scoreInUniversty(98));
console.log ('---- Task 4.23 ----');
// function counter() {
//   let number = 0;
//   function counterFCN() {
//      number++; 
//     return number;
//   }
//   return counterFCN;
// }
// let x = counter(); 
// console.log(x()); 
// console.log(x());  
// console.log(x());
// console.log(x());
console.log ('---- Task 4.24 ----');
// let number = 0; 
// function counter() {
//   number++; 
//   return number; 
// }
// function resetCounter() {
//   let countBeforeReset =  number ;
//   number = 0; 
//   return `${countBeforeReset} and the counter reset now`;
// }

// console.log(counter ()); 
// console.log(counter ());  
// console.log(resetCounter());
// console.log(counter ());

