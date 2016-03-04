// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');

// This package exports the function to create an express instance:
var app = express();

// We can setup Jade now!
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// Setup your routes here!

app.get("/home", function (request, response) {
    response.render("pages/home", { pageTitle: "Welcome Home" });
});

app.get("/", function (request, response) { 
    response.render("pages/form");
});
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

app.post("/results/LoanRepayment/", function (request, response) {
    try {
		var monthlyAmount = request.body.MonthlyAmount;
		var runningAmount = request.body.LoanAmount;
		var rateOfInterest = request.body.InterestRate;
		var OperationTitle = "Loan Repayment"
		//console.log(monthlyAmount+runningAmount+rateOfInterest);
		
		var result = myData.LoanRepayment(monthlyAmount,runningAmount,rateOfInterest);
        response.render('pages/home', { pageTitle:"Result",operationTitle:OperationTitle, display:result});
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).render('pages/error', { errorType: "Error in calculation!", errorMessage: message });
    }
});

app.post("/results/RetirementAmount/", function (request, response) {
    try {
		var years = request.body.years;
		var MAmount = request.body.MAmount;
		var ROI = request.body.ROI;
		var OperationTitle = "Retirement Amount"
		//console.log(years+MAmount+ROI);
		
		var result = myData.retirementAmountIfSavingPerMonth(years,MAmount,ROI);
        response.render('pages/home', { pageTitle:"Result",operationTitle:OperationTitle, display:result});
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).render('pages/error', { errorType: "Error in calculation!", errorMessage: message });
    }
});

app.post("/results/InvestedAmount/", function (request, response) {
    try {
		var yearsInvesting = request.body.yearsInvesting;
		var RecAmount = request.body.RecAmount;
		var RateOfInterest = request.body.RateOfInterest;
		var OperationTitle = "Investement Amount"
		//console.log(yearsInvesting+RecAmount+RateOfInterest);
		
		var result = myData.investedAmountAfterSomeYears(yearsInvesting,RecAmount,RateOfInterest);
        response.render('pages/home', { pageTitle:"Result",operationTitle:OperationTitle, display:result});
    } catch (message) {
        // we caught an exception! Let's show an error page!
        response.status(500).render('pages/error', { errorType: "Error in calculation!", errorMessage: message });
    }
});


// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
