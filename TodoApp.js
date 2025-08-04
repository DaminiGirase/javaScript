let todo = [];

let req = prompt("Please Enter your reuest");

while(true){
    if(req == "quit"){
        console.log("quiting todo");
        break;
    }

    if(req == "list"){
        console.log("-----------");
        for(let i=0; i<todo.length; i++){
             console.log(i, todo[i]);
        }
       console.log("-------------");
    }
    else if(req == "add"){
        let task = prompt("Enter your task to add");
        todo.push(task);
        console.log("task added");
    }
    else if(req == "delet"){
        let indx = prompt("Enter a index you want remove");
        todo.splice(indx, 1);
        console.log("task deleted");
    }
    else{
        console.log("Invalid task");
    }
      req = prompt("Please Enter your reuest");
}