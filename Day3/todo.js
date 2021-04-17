var todos = ["Please enter the todos"];

var input = prompt("What would you like to do?");

while(input !== "quit"){

    if(input === "list"){
        printList();
    }
    else if(input === "new"){
        addTodo();
    }else if(input === "delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("Ok, you are out of todo app.")

function printList(params) {
    console.log("**********")
    todos.forEach(function(todo, index){
        console.log(index + ": " + todo)
    });
}

function addTodo() {
    var newTodo = prompt("Enter the  new todo:");
    todos.push(newTodo);
    console.log(newTodo + " added to list")
}

function deleteTodo(params) {
    var index = prompt("Enter the index to delete:");
    todos.splice(index, 1);
    console.log("Todo Removed")
}