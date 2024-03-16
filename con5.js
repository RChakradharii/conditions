/*Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).*/


const input = require ('readline-sync');

let a = input.questionInt("enter first number:");
let b = input.questionInt("enter second number:");
let c = input.questionInt("enter third number:");
let d = input.questionInt("enter four number:");
if(a>b && a>c && a>d) {

console.log("a is grator ",a);

}
else if(b>a && b>c && b>d )
{

console.log("b is grator ",b);

}
else if (c>a && c>b && c>d) {

console.log(" c is grator ",c);
}
else {

console.log("d is grator ",d);

}
