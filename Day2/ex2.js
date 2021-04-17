function name(){
    console.log("This is my first function in javascript!.");
}

function func1(){
    var var1 = Number(prompt("Var1:"));
    var var2 = Number(prompt("Var2:"));
    var var3 = var1 + var2;
    console.log("Add - " + var3)
}

function func2(var1, var2){
    var var3 = var1 * var2;
    console.log("Multiply - " + var3)
}


function func3(){
    var var1 = Number(prompt("Var1:"));
    var var2 = Number(prompt("Var2:"));
    var var3 = var1 / var2;
    return "Division - " + var3
}

function func4(var1, var2){
    var var3 = var1 ** var2;
    return "Exp - " + var3;
}

var sayHello = function(name){
    return "Hi, " + name;
}

console.log(sayHello("Vishwajeet"));