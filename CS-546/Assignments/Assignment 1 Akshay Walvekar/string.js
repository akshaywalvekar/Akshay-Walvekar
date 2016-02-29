var exports = module.exports = {};

exports.occuranceofSubstring = function (mainString, substr){
	
	if(mainString == "" || substr == "")
		return new Error("Invalid input...");
	else{	
		console.log("Occurance of Substring ");
		console.log("\nMain String:"+mainString);
		console.log("\nSub String :"+substr);
		var i=0
		var pos=-1;
		var count=0;
		while(i<mainString.length){
			pos = mainString.indexOf(substr,pos+1);
			if(pos==-1){
				break;
			}else{
				count++;
			i=pos;
			i=i+1;
			}
		}
		return count;
	}
}

exports.occuranceofSubstringInsensitive = function (mainString, substr){
	
	if(mainString == "" || substr == "")
		return new Error("Invalid input...");
	else{
		console.log("\nMain String:"+mainString);
		console.log("\nSub String :"+substr);
		mainString = mainString.toLowerCase();
		substr = substr.toLowerCase();
		var i=0
		var pos=-1;
		var count=0;
		while(i<mainString.length){
			pos = mainString.indexOf(substr,pos+1);
			if(pos==-1){
				break;
			}else{
				count++;
			i=pos;
			i=i+1;
			}
		}
		return count;
	}
}

exports.randomizeSentences = function (psentence){
		
	if(psentence == "")
		return new Error("Invalid input...");
	
	console.log(psentence);
	
	var SplitArray = psentence.split(".");
	var RandomArray = [];
	//console.log(RandomArray.length);
	var LoopCounter = 0;
	while(LoopCounter<SplitArray.length){
		RandomIndex=Math.floor(Math.random()*SplitArray.length);
		if(RandomIndex<SplitArray.length){
			RandomArray[LoopCounter] = SplitArray[RandomIndex];
			//RandomNumberIndex[RandomIndex] = 1;
			LoopCounter++;
		}
	}
	return RandomArray;
}


