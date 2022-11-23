function calculate(){

//prompts user to Enter first number
var firstNumber;
firstNumber =prompt('Enter the first number');
//prompts user to Enter second number
var secondNumber;
secondNumber =prompt('Enter the second number');


//Enter mode of operation
var operator;
operator =prompt('Enter the operator(+,-,/,*)');


//Display result to the user
if(operator=='+'){
    //this is the function for adding two numbers
    result= Number(firstNumber) +Number(secondNumber);
}else if(operator=='-'){
    //this is the function for subtracting two numbers
    result= Number(firstNumber) - Number(secondNumber);
}else if(operator=='*'){
    //this is the function for multiplying two numbers
    result= Number(firstNumber)*Number(secondNumber);
}else if(operator=='/') {
    //this is the function for dividing two numbers
    result= Number(firstNumber) /Number(secondNumber);
} else result ="Error please enter valid operator"
    //this is the function for errors

alert(result);

}
