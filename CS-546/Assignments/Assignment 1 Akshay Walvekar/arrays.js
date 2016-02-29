var exports = module.exports = {};

exports.ShallowClone = function(tempArray){
	
	if(tempArray == ""){
		return new Error("Empty Array.. can not copy...");
	}
	
	
	var copyArray = {};
    for(var i in tempArray) {
        if(tempArray.hasOwnProperty(i)) {
            copyArray[i] = tempArray[i];
        }
    }
    return copyArray;
}

exports.randomized = function(TempObject){
	
	if(TempObject == ""){
		return new Error("Empty Array.. can not randomize array...");
	}
	
	var CloneArray = [];
	CloneArray = TempObject;
	var LoopCounter = 0;
	var RandomIndex;
	
	while(LoopCounter<CloneArray.length){
		RandomIndex = Math.floor(Math.random()*CloneArray.length);
		CloneArray[LoopCounter] = TempObject[RandomIndex];
		LoopCounter++;
	}	
	return CloneArray;
}

