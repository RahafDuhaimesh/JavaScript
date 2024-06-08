/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
console.log ("---- Task 1.1 ----");
// function larger (a,b) {
// if ( a >= b) {
//     console.log (a + ' is larger than ' + b)
// }
// else {
//     console.log (a + ' is smaller than ' + b)
// }
// }
// larger (9,8);
/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
console.log ("---- Task 1.2 ----");
// function productSign (x,y,z) {
//    let ans ;
//    ans = x*y*z ;
//    if ( ans > 0 )
//     console.log ("The sign is positive");
//    else 
//     console.log ("The sign is negative");
// }
// productSign (3,-7,2);
/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
console.log ("---- Task 1.3 ----");
let x = 0; let y = -1; let z = 4;
let temp;
if (x < y) {
    temp = x ;
    x = y;
    y = temp;
}
if ( x < z)  {
    temp = x ;
    x = z;
    z = temp;
}
if ( y < z)  {
    temp = y ;
    y = z;
    z = temp;
}
let array1= [x , y , z];
alert (array1);
/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */
console.log ("---- Task 1.4 ----");
// let array2 = [-5, -2, -6, 0, -1 ];
// if (array2[0] > array2[1]) {
//      temp = array2[0] ;
//      array2[0] = array2[1];
//      y = temp;
    
// }
 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
 console.log ("---- Task 1.5 ----");
 // let x = 9;
// let y = 6;
// if (x > y) {
//     console.log ("Hello World!");
// }
// else {
//     console.log ("BYE!");

// }
console.log ("---- Task 2 ----");
// let grade = 78;
// if (grade < 50) {
//     console.log ("Your result is: Fail.")
// }
// else if ( grade > 50 && grade < 59) {
//     console.log ("Your result is: E")
// }
// else if ( grade > 60 && grade < 69) {
//     console.log ("Your result is: D")
// }
// else if ( grade > 70 && grade < 79) {
//     console.log ("Your result is: C")
// }
// else if ( grade > 80 && grade < 89) {
//     console.log ("Your result is: B")
// }
// else if ( grade > 90 && grade < 100) {
//     console.log ("Your result is: A")
// }
console.log ("---- Task 3.1 ----");
// 1. Write a JS code to print numbers from 1 to 10
// for (let i = 1 ; i <= 10 ; i++) {
//     console.log (i)
// }
console.log ("---- Task 3.2 ----");
/*2. Write a JS code to print Even numbers in arr :
   var arr = [13,23,12,45,22,48,66,100]
*/
// var arr = [13,23,12,45,22,48,66,100];
// for (let m = 0 ; m < 9 ; m++)
// {
//     if ( arr[m] % 2 == 0)
//         console.log (arr[m]);
// }
console.log ("---- Task 3.3 ----");
// let array3;
// for ( let i = 1 ; i < 9 ; i++)
//     { array3 = ''; 
//     for (let m = 1 ; m <= i ; m++ ){
//        array3 += m ;
//     }
//     console.log (array3);
// }
 /* 
 Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
let x = "don’t know why"
*/
console.log ("---- Task 3.4 ----");
// let x = "dont know why";
// let answer =  false;
// for (let i = 0 ; i< x.length ; i++) {
//     if (x[i] == 'y')
//     {
//     answer = true;
//     console.log ('yes');
//     break;
//     }
// }
// if (answer == false) {
//     console.log ('no');
// }



