// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js')

// This package exports the function to create an express instance:
var app = express();

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Setup your routes here!

function respondWithMonthlyPayment(response,monthlyAmount,runningAmount,rateOfInterest) {
    try {
        var mamount = myData.LoanRepayment(monthlyAmount,runningAmount,rateOfInterest);
        response.json({status:"success",result:mamount});
    } catch (e) {
        response.status(500).json({ status:"Error", message: e });
    }
}

function respondWithRetirementAmount(response, years,monthlyAmount,rateOfInterest) {
    try {
        var RetirementAmount = myData.retirementAmountIfSavingPerMonth(years,monthlyAmount,rateOfInterest);
        response.json({status:"success",result:RetirementAmount});
    } catch (e) {
        response.status(500).json({ status:"Error", message: e });
    }
}

function respondWithInvestedAmount(response, years,InvestingAmount,rateOfInterest) {
    try {
        var InvestingAmount = myData.investedAmountAfterSomeYears(years,InvestingAmount,rateOfInterest);
        response.json({status:"success",result:InvestingAmount});
    } catch (e) {
        response.status(500).json({ status:"Error", message: e });
    }
}
function respondWithOtherURL(response,request){
	try {
        var message = myData.AllOtherURL();
        response.json({status:"URL Error",result:message});
    } catch (e) {
        response.status(500).json({ status:"Error", message: e });
    }
}

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});

app.get("/api/LoanRepayment/", function (request, response) {
	var monthlyAmount = request.query.monthlyAmount;
	var runningAmount = request.query.runningAmount;
	var rateOfInterest = request.query.rateOfInterest;
    respondWithMonthlyPayment(response, monthlyAmount,runningAmount,rateOfInterest);
});

app.get("/api/RetirementAmount/", function (request, response) {
	var yearsofInvestment = request.query.years;
	var monthlyAmount = request.query.monthlyAmount;
	var rateOfInterest = request.query.rateOfInterest;
    respondWithRetirementAmount(response, yearsofInvestment,monthlyAmount,rateOfInterest);
});

app.get("/api/InvestedAmount/", function (request, response) {
	var yearsOfInvestment = request.query.years;
	var InvestingAmount = request.query.InvestingAmount;
	var rateOfInterest = request.query.rateOfInterest;
    respondWithInvestedAmount(response, yearsOfInvestment, InvestingAmount, rateOfInterest);
});

app.post("/api/LoanRepayment/", function (request, response) {
	
	var MonthlyAmount = request.body.MonthlyAmount;
	var RunningAmount = request.body.LoanAmount;
	var ROI = request.body.RateOfInterest;
		
	var result = myData.LoanRepayment(MonthlyAmount,RunningAmount,ROI);
	response.render('pages/home', { pageTitle: "Welcome Home",display: result});
	
app.post("/api/RetirementAmount/", function (request, response) {
	
	var MonthlyAmount = request.body.MonthlyAmount;
	var RunningAmount = request.body.LoanAmount;
	var ROI = request.body.RateOfInterest;
		
	var result = myData.LoanRepayment(MonthlyAmount,RunningAmount,ROI);
	response.render('pages/home', { pageTitle: "Welcome Home",display: result});

app.get("*", function (request, response) {
    respondWithOtherURL(response, request);
});



