// -----------Zaqkat Task-------------------
console.log ("------Zakat Task ------");
let money = 250 ;
let zakat = money * 0.025 ;
console.log (`Zakat value is ${zakat}`);

// ----------------Array Tasks ----------------: 
// ---------------------1----------------------
//  [ 1,7  9  45, ]
console.log ("---- Task 1 ----");
let x = [ 1,7,9,45];
console.log (x);
/*  ["Str" "alex","moh"
'the','fox' 'over' lazy, 'dog',  ] */
let y = ["Str", "alex","moh",'the','fox' ,'over', 'lazy', 'dog']
console.log (y);
// ---------------------2----------------------
console.log ("---- Task 2 ----");
fruits = ["Tomato", "Banana", "Watermelon"];
let indexBanana = fruits.indexOf("Banana");
let indexTomato = fruits.indexOf("Tomato");
console.log("Index of Banana:", indexBanana);  
console.log("Index of Tomato:", indexTomato);
// ---------------------3----------------------
console.log ("---- Task 3 ----");
let favList = {
  foods: ["Yalanji", "Potato"],
  sports: ["basketball", "running", "swimming"],
  movies: ["black swan", "A man called otto"]
};
console.log('My Favorite list:');
for (const key in favList) {
console.log(`${key}: ${favList[key]}`);
}
// --------------------- 4 + 5 ----------------------
console.log ("---- Task 4 + 5 ----");
let Array1 = [1,4,5];
console.log("The first element of Array1 : " + Array1.at(0) );
console.log("The last element of Array1 : " + Array1.at(length-1) );
let Array2 = ["t","u","g","x"];
console.log("The first element of Array2 : " + Array2.at(0) );
console.log("The last element of Array2 : " + Array2.at(length-1) );
// ---------------------6----------------------
console.log ("---- Task 6 ----");
let Array3 = [0,5,7,9];
Array3.push(10);
for (let m = 0 ; m<3 ; m++) {
Array3.shift()
}
Array3.unshift (1,3,4,6,8);
console.log (Array3); 
// ---------------------7----------------------
console.log ("---- Task 7 ----");
let array4 = [5,9,-7,3.5];
array4.push(4);
array4.unshift(1);
array4.shift();
array4.pop();
console.log (array4); 
// ---------------------8----------------------
console.log ("---- Task 8 ----");
let array5 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
array5.sort ((a,b) => a - b);
console.log (array5);


