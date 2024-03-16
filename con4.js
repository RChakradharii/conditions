/*Write a program to take a number from the user and output whether that number is negative, positive or zero.*/


const input = require("readline-sync");
let n = input.questionInt("enter the value:");
if(n>0) {

console.log("positive",n);

}else if(n<0) {

console.log("negative",n);

}else{

console.log("zero");

}
