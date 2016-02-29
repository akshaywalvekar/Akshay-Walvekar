var exports = module.exports = {};
var prettyjson = require("prettyjson");


/*var toDoListTask = {
  id: "-1",
  author: "",
  taskTitle: "",
  taskDescription: "",
  taskNotes: [""],
  status: ""
}*/

var toDoList = [];

exports.AllTasksInToDo = function () { 
    return toDoList;
}

exports.addTask = function (AddTask) {
	
	//console.log(taskAuthor+TaskTitle+TaskDescription);
	
	if(AddTask.author == "")
		throw {code:500, error:"You must provide valid information in the request body to create an entry."};
	if(AddTask.taskTitle == "")
		throw {code:500, error:"You must provide valid information in the request body to create an entry."};
	if(AddTask.taskDescription == "")
		throw {code:500, error:"You must provide valid information in the request body to create an entry."};
	
    AddTask.id = toDoList.length;
    toDoList.push(AddTask);
    return AddTask;
}

exports.TaskBasedOnStatus = function (TaskStatus){
	
	var TaskWithStatus = toDoList.filter(function (todoTask) { return todoTask.taskStatus === TaskStatus; });
	
	if (TaskWithStatus.length > 0) return TaskWithStatus;
    
	throw {code:404,error:"Task with " + TaskStatus + " status could not be found."};
}

exports.DisplayTask = function (id){
	
	if (typeof id === "string") id = parseInt(id);
	if (id !== 0 && !id) throw {code:500, message:"Must provide ID"};
	var todoTask = toDoList.filter(function (todoTask) {
        return todoTask.id === id;
    }).shift();
	if (!todoTask) throw {code:404,error:"An entry with the ID of "+id+" could not be found"};
	return todoTask;	
}

exports.UpdateTask = function(id,taskTitle,taskDescription,taskStatus){
	
	//console.log(taskStatus);
	
	if(taskTitle == "" && taskDescription == "" && taskStatus == "")
		throw {code:500, error:"You must provide valid information in the request body to create an entry."};

	console.log(taskStatus);
	
	var GetTask = exports.DisplayTask(id);
	
	if(taskTitle != "")
		GetTask.taskTitle = taskTitle;
	//console.log(taskStatus);
	if(taskDescription != "")
		GetTask.taskDescription = taskDescription;
	console.log(taskStatus);
	if(taskStatus != "")
		//console.log("in 1st if");
		if(taskStatus == "open" || taskStatus == "completed"){
			//console.log("in 2nd if");
			GetTask.taskStatus = taskStatus;}
		else{
			throw {code:500, error:"You must provide valid information in the request body to create an entry."};}
		
	return GetTask;
}

exports.UpdateTaskNotes = function(id, taskNotes){
	
	if(taskNotes == "")
		throw {code:500, error:"You must provide valid information in the request body to create an entry."};
	
	var GetTask = exports.DisplayTask(id);
	console.log(GetTask);
	GetTask.taskNotes = taskNotes;
	
	return GetTask;	
}

exports.DeleteTask = function(id){
	
	if(id == "") throw {code:500, error:"You must provide valid information in the request body to create an entry."};
	var GetTask = exports.DisplayTask(id);
	var index = toDoList.indexOf(GetTask);
	if(index >- 1)
		toDoList.splice(index, 1);
	else
		throw {code:404,error:"An entry with the ID of "+id+" could not be found"};
}

exports.addTask({ id:"", author: "Akshay", taskTitle: "Meet a friend", taskDescription: "Meeting with Ritesh, Place: Dunkin Donuts, Time:3PM", taskNotes:"Take Notebook, Pen, Calculator", taskStatus:"completed" });
exports.addTask({ id:"", author: "Jayshree", taskTitle: "Meet a friend", taskDescription: "Meeting with Sulekha, Place: MCD, Time:6PM", taskNotes:"", taskStatus:"open" });