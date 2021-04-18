// //1. init.
// var person = {};
// person.name = "Vishwajeet";
// person.age = 30;
// person.city = "Meerut";

// //2. init
// var person = {
//     name : "Vishwajeet",
//     age : 30,
//     city : "Meerut"  
// };

// //3. init
// var person = new Object();
// person.name = "Vishwajeet";
// person.age = 30;
// person.city = "Meerut";

//2. init
var person = {
    name : "Vishwajeet",
    age : 30,
    city : "Meerut"  
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);

person["age"] += 3;
person.city = "Mumbai";

console.log(person.age);
console.log(person.city);

var obj1 = {
    age : 30,
    color: "red",
    bool: true,
    friend: ["Vinay","Vivek"],
    pet: {
        name: "Rog",
        species: "Dog",
        age: 2
    }
};

console.log(obj1);
console.log(obj1.pet);
console.log(obj1.pet.name);

var students = [
    {
        name: "Vishwajeet",
        degree: "B.Tech",
        gpa: 7.9
    },
    {
        name: "Vinay",
        degree: "B.Tech",
        gpa: 9.7
    }
]

console.log(students);
console.log(students[0]);
console.log(students[0].name);
console.log(students[0].gpa);
console.table(students);