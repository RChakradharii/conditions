/*Write a program to take a year from the user and output whether a given year is a leap year or not.*/

const input =require('readline-sync');

let a = input.questionInt("enter the number:")
if(a%4==0 && a%400!=0){
    console.log("leap year")
}else if(a%400==0){
    console.log("not a leap year")
}else{
    console.log("not a leap year")
}

