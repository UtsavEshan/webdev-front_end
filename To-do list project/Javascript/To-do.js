var todos = [ "buy new turtle"];

var input = prompt("what would you like to do?");

while(input !== "quit"){

if(input === "list") {
    console.log("**********")
    todos.forEach(function(todo, i){
       console.log( i + ":" + todo);
    });
} else if(input === "new") {
    var newTodo = prompt("Enter new todo");

    todos.push(newTodo);
    console.log("Added Todo")
}   else if( input === "delete" ){
    
    var index = prompt("enter index of todo to delete")

    todos.splice(index,1); 
}


   input = prompt("what would you like to do?")

}

