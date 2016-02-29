var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

/*======================================Object.js===========================================*/

console.log("======================================Object.js===========================================");
var ClassInfoCloneObject = {
	ClassCode: "Cs-522",
	ClassName: "Web Programming",
	FacultyDetails:{	
		ProfessorName: "Philip Baressi",
		TAName: "John Smith",
		ClassTiming: "Friday 12 to 3"
	}
};
console.log("");
console.log(objectModule.shallowClone(ClassInfoCloneObject));

console.log("");
console.log(objectModule.deepClone(ClassInfoCloneObject));

/*======================================Arrays.js===========================================*/
console.log("======================================Arrays.js===========================================");

BaseArray = ["Rikimaru","Juggernaut","Bane Elemental","Invoker"];

var result = arrayModule.ShallowClone(BaseArray);
if(result instanceof Error)
	console.log(result);
else
	console.log(result);

var result = arrayModule.randomized(BaseArray);
if(result instanceof Error)
	console.log(result);
else{
		var LoopCounter = 0;
		console.log("");
		while(LoopCounter<result.length){
		console.log(result[LoopCounter]);
		LoopCounter++;
	}
}

/*======================================dates.js===========================================*/
console.log("======================================dates.js===========================================");
console.log("");
var EndDate = new Date(2017,01,07);
console.log("The number of days remaining:"+dateModule.daysUntil(EndDate)+" day/s");

console.log("");
console.log("Number of days left in year:"+dateModule.daysLeftInYear());

var EndDate = new Date(2014,01,07);
console.log("The number of days past:"+dateModule.daysUntil(EndDate)+" day/s");

console.log("")
console.log( "Next Friday the 13th is on,"+dateModule.nextFridayTheThirteenth());

/*======================================number.js===========================================*/
console.log("======================================number.js===========================================");
console.log("");
result = numberModule.triangleArea(5,8);

if(result instanceof Error)
	console.log(result);
else
	console.log("\nArea of Triangle is: "+result);

result = numberModule.perimeterOfTriangle(5,8,7);

if(result instanceof Error)
	console.log(result);
else
	console.log("\nPerimeter of Triangle is: "+result);

result = numberModule.areaOfSquare(4);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nArea of Square is: "+result);

result = numberModule.perimeterOfSquare(5);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nPerimeter of Square is: "+result);

result = numberModule.areaOfCube(6);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nArea of Cube is: "+result);

result = numberModule.surfaceAreaOfCube(7);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nVolume of Cube is: "+result);

result = numberModule.perimeterOfCube(8);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nPerimeter of Cube is: "+result);

result = numberModule.circumferenceOfCircle(9);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nCircumference of Circle is: "+result);

result = numberModule.areaOfCircle(10);
if(result instanceof Error)
	console.log(result);
else
	console.log("\nArea of Circle is: "+result);

/*======================================string.js===========================================*/
console.log("======================================strings.js======================================");
console.log("");
result = strModule.occuranceofSubstring("This is a wise decision","is");
if(result instanceof Error)
	console.log(result);
else
	console.log("\nTotal count: "+result);

result = strModule.occuranceofSubstringInsensitive("This is a wise decision","Is");
if(result instanceof Error)
	console.log(result);
else
	console.log("\nTotal count: "+result);

var psentence =  "Can we go to the park.Where is the orange cat? Said the big black dog.\
We can make the bird fly away if we jump on something.\
We can go down to the store with the dog. It is not too far away.\
My big yellow cat ate the little black bird.\
I like to read my book at school.\
We are going to swim at the park."


result = strModule.randomizeSentences(psentence);
if(result instanceof Error)
	console.log(result);
else
	console.log(result);