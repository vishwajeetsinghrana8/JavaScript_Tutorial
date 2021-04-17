var str = "Vishwajeet";

var count = 0;

while (count < str.length){
    console.log(str[count]);
    count++;
}

var str = "Vishwajeet"

for(var i=0; i < str.length; i++){
    console.log(str[i])
}

var num1 = Number(prompt("Enter the number"));
var num2 = 1;
var num3 = 0;

while(num2 <= 10){

    num3 = num1 * num2;
    console.log(num1 + ' x ' + num2 + ' = ' + num3);
    num2++;
}