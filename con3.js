/*Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)*/


const input = require("readline-sync");

let a = input.questionInt("enter the first number :"); 
let b = input.questionInt("enter the second number :");
let c = input.questionInt("enter the third number:");
if (a>b && a>c) {

console.log("greater",a);

} else if (b>a && b>c) {

console.log("greater",b);

}else{

console.log("greater",c);

}
