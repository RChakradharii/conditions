
/*Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: 
(Gross salary is the sum of basic salary, HRA, and DRA)
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%*/

const input =require('readline-sync');


let BS = input.questionInt("enter the basic salary:");

if(BS<=10000){
    HRA=BS*0.2
    DA=BS*0.8
    GS=(HRA+DA+BS);
    
}else if(BS<=20000){
    HRA=BS*0.25
    DA=BS*0.9
    GS=(HRA+DA+BS);

}else if(BS>20000){
    HRA=BS*0.3
    DA=BS*0.95
    GS=(HRA+DA+BS);   
}
console.log(GS);
