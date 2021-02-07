// program for a simple calculator

// Pick your first number and then the operator and then your 2nd number

var numb1 = prompt('Enter first number: ');
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var numb2 = prompt('Enter second number: ');



//numbers 1 & 2 ad the results
var n1=numb1;
var n2=numb2;
var r;

// using if...else if... else
if (operator == '+') {
    r = Number(n1) + Number(n2);
}
else if (operator == '-') {
    r = Number(n1) - Number(n2);
}
else if (operator == '*') {
    r = Number(n1) * Number(n2);
}
else {
    r = Number(n1) / Number(n2);
}

// display the result
console.log(`${n1} ${operator} ${n2} = ${r}`);

document.write(`<center><h3>You entered ${n1} ${operator} ${n2} <br>  Your answer is ${r}! <br>
                Thank You for using my simple calculator!</h3></center>`);
