/*Write a program to take 3 numbers from the user and output the second max of 3 numbers.
(First, do it in the normal way then do it by using 3 comparisons)*/

const input =require('readline-sync');


let a = input.questionInt("enter first number:");
let b = input.questionInt("enter second number:");
let c = input.questionInt("enter third number:");

if(a>b){
    max=a;
    min=b;
}else{
    max=b;
    min=a;
}if(b>c){
    maxi=max;
    mini=c;
}else{
    maxi=c;
    mini=b;
}if(min>mini){
    console.log(min);
}else{
    console.log(mini);
}
