var obj ={
    name: "Vishwajeet",
    age: 30,
    city: "Meerut",
    avg: function(x,y,z){
        return (x+y+z)/3;
    }
}

console.log(obj.avg(3,3,4));

var dog = {
    speak: function(){
        return "WOOF!"
    }
}

var cat = {
    speak: function(){
        return "MEOW!"
    }
}

console.log(dog.speak());
console.log(cat.speak());