/*Write a program to take two numbers from the user and determine the greater of those two given numbers.*/



const input = require("readline-sync");

let a = input.questionInt("enter the first number:");
let b = input.questionInt("enter the second number: ");
if(a>b){

console.log(" greater number",a);

}else{

console.log(" greater number",b);

}
