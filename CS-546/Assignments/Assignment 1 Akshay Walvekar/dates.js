var exports = module.exports = {};

exports.daysUntil = function (EndDate){
	var TempDate = new Date();
	var TempDateDay = TempDate.getDate();
	var TempDateMonth = TempDate.getMonth();
	var TempDateYear = TempDate.getFullYear();
	
	var StartDate = new Date(TempDateYear, TempDateMonth, TempDateDay);
	StartDate.setMilliseconds(00);
	StartDate.setSeconds(00);
	StartDate.setHours(00);
	
	TempDateDay = EndDate.getDate();
	TempDateMonth = EndDate.getMonth();
	TempDateYear = EndDate.getFullYear();
	
	//console.log(typeof(TempDateDay));
	
	EndDate = new Date(TempDateYear, TempDateMonth, TempDateDay);
	
	console.log("");
	console.log("The current date is:"+StartDate);
	console.log("");
	console.log("The some date is:"+EndDate);
	console.log("");
	
	var DateDifference = Math.abs(EndDate-StartDate);
	
	//console.log(DateDifference);
	var days = Math.ceil(DateDifference/(1000*60*60*24));
	return days
}

exports.daysLeftInYear = function(){
	var TempDate = new Date();
	var TempDateDay = TempDate.getDate();
	var TempDateMonth = TempDate.getMonth();
	var TempDateYear = TempDate.getFullYear();
	
	var StartDate = new Date(TempDateYear, TempDateMonth, TempDateDay);
	StartDate.setMilliseconds(00);
	StartDate.setSeconds(00);
	StartDate.setHours(00);
	
	var EndDate = new Date();
	
	EndDate.setMonth(11);
	EndDate.setDate(31);
	EndDate.setFullYear(TempDateYear);
	
	console.log("");
	console.log("The current date is:"+StartDate);
	console.log("");
	
	var DateDifference = Math.abs(EndDate-StartDate);
	var days = Math.ceil(DateDifference/(1000*60*60*24));
	return days
}

exports.daysSince = function (EndDate){
	var TempDate = new Date();
	var TempDateDay = TempDate.getDate();
	var TempDateMonth = TempDate.getMonth();
	var TempDateYear = TempDate.getFullYear();
	
	var StartDate = new Date(TempDateYear, TempDateMonth, TempDateDay);
	StartDate.setMilliseconds(00);
	StartDate.setSeconds(00);
	StartDate.setHours(00);
	
	TempDateDay = EndDate.getDate();
	TempDateMonth = EndDate.getMonth();
	TempDateYear = EndDate.getFullYear();
	
	//console.log(typeof(TempDateDay));
	
	EndDate = new Date(TempDateYear, TempDateMonth, TempDateDay);
	
	console.log("");
	console.log("The current date is:"+StartDate);
	console.log("");
	console.log("The some date is:"+EndDate);
	console.log("");
	
	var DateDifference = Math.abs(EndDate-StartDate);
	
	//console.log(DateDifference);
	var days = Math.ceil(DateDifference/(1000*60*60*24));
	return days
}

exports.nextFridayTheThirteenth = function(){
	
	var StartDate = new Date();
	StartDate.setMilliseconds(00);
	StartDate.setSeconds(00);
	StartDate.setHours(00);
	var StringMonth;
	EndDate = new Date(2016,00,01);
	TempDateMonth = EndDate.getMonth();
	
	while(true){
		if(EndDate.getDay() == 0){
			EndDate.setDate(13);
			return EndDate
		}else{
			EndDate.setMonth(TempDateMonth++)
		}			
	}
}