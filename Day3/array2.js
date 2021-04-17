var colors = ["red","orange","yellow","green"];
console.log(colors);

// Push() & Pop()
colors.push("blue");
console.log(colors);

colors.pop();
console.log(colors);

// unshift() & shift()
colors.unshift("blue");
console.log(colors);

colors.shift();
console.log(colors);

// indexOf()
console.log(colors.indexOf("yellow"));

for (var i = 0; i < colors.length; i++){
    console.log(colors[i] + " index is " + colors.indexOf(colors[i]));
}

// Slice()
var a1 = [10,20,30,"a","b","c",40,50,60];
var s1 = a1.slice(3,6)

console.log(a1);
console.log(s1);

// Multidimentional Array Sl
var items = [
    [10,20,30,40],
    ["bat","cat","rabit","dog"],
    ["mango","grapes","apple"]
];

// console.log(items[1][1]);

// for each()
var colors = ["red","orange","yellow","green"];

// colors.forEach(function(color) {
//     console.log(color);
// });

function printColor(color) {
    console.log('***************');
    console.log(color);
}

colors.forEach(printColor);