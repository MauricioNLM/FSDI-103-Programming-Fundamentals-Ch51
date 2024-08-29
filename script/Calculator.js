let num1 = Number(prompt("Enter the first number."));
let num2 = Number(prompt("Enter the second number."));
let operation = prompt(`1.-addition\n2.-subtraction\n3.-multiplication\n4.-division\nselect the operation `);


let result;
let exception = false;
if(operation == 1){
    result=num1+num2;

}else if(operation == 2){
    result= num1-num2;
}else if(operation == 3){
    result=num1*num2;
}else if(operation == 4){
    if(num1!=0 && num2!= 0){
        result = num1/num2;
    }
    else{
        exception = true;
    }
    
}else{

}

if(exception){
    console.log("A number is 0, please refresh the page.")
}
else { console.log("Enter the number corresponding to the desired operation: "+operation+"\nThe result is "+ result)}