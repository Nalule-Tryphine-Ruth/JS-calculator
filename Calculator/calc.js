function calculate(){

//Enter first number
var firstNumber;
firstNumber =prompt('Enter the first number');
//Enter second number
var secondNumber;
secondNumber =prompt('Enter the second number');


//Enter mode of operation
var operator;
operator =prompt('Enter the operator(+,-,/,*)');


//Display result to the user
if(operator=='+'){
result= Number(firstNumber) +Number(secondNumber);
}else if(operator=='-'){
    result= Number(firstNumber) - Number(secondNumber);
    }else if(operator=='*'){
        result= Number(firstNumber)*Number(secondNumber);
    }else if(operator=='/') {
        result= Number(firstNumber) /Number(secondNumber);
    } else result ="Error please enter valid operator"

alert(result);

}