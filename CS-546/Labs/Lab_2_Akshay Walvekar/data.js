var exports = module.exports = {};

// You can now add export properties to the exports object to be accessible from outside this file
exports.LoanRepayment = function(monthlyAmount,runningAmount, rateOfInterest) {
	var month = 1;
	var temp1;
	var total1;
		
	if(isNaN(monthlyAmount)||isNaN(runningAmount)||isNaN(rateOfInterest))
		throw "Provide valid input";
	if(monthlyAmount<=0||runningAmount<=0||rateOfInterest<=0)
		throw "Please provide positive input"
	else{
		monthlyAmount = parseInt(monthlyAmount);
		runningAmount = parseInt(runningAmount);
		rateOfInterest = parseFloat(rateOfInterest);
		do{
			temp1=(1+(rateOfInterest/12));
			total1=runningAmount*temp1;
			runningAmount=total1-monthlyAmount;
			month++;
		}while(runningAmount>0)
		console.log("Total months for repayment:"+month+"\n");
	}
	month=month.toString();
	return month;
};

exports.retirementAmountIfSavingPerMonth = function(YearUntilRetirement,AmountSavingPerMonth,YearlyRateOfInterest){
	
	var total,i=1,temp,RunningTotal=0;
	
	if(isNaN(YearUntilRetirement)||isNaN(AmountSavingPerMonth)||isNaN(YearlyRateOfInterest))
		throw "Provide valid input";
	if(YearUntilRetirement<=0||AmountSavingPerMonth<=0||YearlyRateOfInterest<=0)
		throw "Please provide positive input"
	
	else{
		YearUntilRetirement = parseInt(YearUntilRetirement);
		AmountSavingPerMonth = parseInt(AmountSavingPerMonth);
		YearlyRateOfInterest = parseFloat(YearlyRateOfInterest);
		while(i<=(YearUntilRetirement*12)){
			total=RunningTotal+AmountSavingPerMonth;
			temp=(1+(YearlyRateOfInterest/12));
			RunningTotal=total*temp;
			i++;
		}
		RunningTotal = RunningTotal.toString();
		return RunningTotal;
	}
};

exports.investedAmountAfterSomeYears = function (YearOfInvestment,InvestedAmount,YearlyRateOfInterest){
	
	if(isNaN(YearOfInvestment)||isNaN(InvestedAmount)||isNaN(YearlyRateOfInterest))
		throw "Provide valid input";
	if(YearOfInvestment<=0||InvestedAmount<=0||YearlyRateOfInterest<=0)
		throw "Please provide positive values"
	else{
		var i=1;
		YearOfInvestment = parseInt(YearOfInvestment);
		InvestedAmount = parseInt(InvestedAmount);
		YearlyRateOfInterest = parseFloat(YearlyRateOfInterest);
		while(i<=YearOfInvestment){
			InvestedAmount=InvestedAmount*(1+YearlyRateOfInterest);
			i++;
		}
		InvestedAmount = InvestedAmount.toString();		
		return InvestedAmount;
	}
}

exports.AllOtherURL = function (){
	return "Invalid URL Please check"
}


"Rikimaru","Juggernaut","Bane Elemental","Invoker"

var psentence =  "Can we go to the park.Where is the orange cat? Said the big black dog.\
We can make the bird fly away if we jump on something.\
We can go down to the store with the dog. It is not too far away.\
My big yellow cat ate the little black bird.\
I like to read my book at school.\
We are going to swim at the park."
