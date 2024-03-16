/*Write a program to take a number from the user and print that number as Odd or Even.*/

const input = require("readline-sync");

let n = input.questionInt("enter the value:");
if(n%2==0) {

console.log("even",n);

}else{

console.log("odd",n);

}
