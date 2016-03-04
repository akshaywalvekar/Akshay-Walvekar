// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function ($) {

    var firstInputLoan = $("#loan-number-one");
    var secondInputLoan = $("#loan-number-two");
	var thirdInputLoan = $("#loan-number-three");
	
	var firstInputInvest = $("#invest-number-one");
    var secondInputInvest = $("#invest-number-two");
	var thirdInputInvest = $("#invest-number-three");
	
	var firstInputRetire = $("#retire-number-one");
    var secondInputRetire = $("#retire-number-two");
	var thirdInputRetire = $("#retire-number-three");
	
    var errorAlertLoan = $("#loan-error-message");
	var errorAlertInvest = $("#invest-error-message");
	var errorAlertRetire = $("#retire-error-message");
	
	
    var btnLoan = $("#loan-submit");
    var btnInvest = $("#invest-submit");
	var btnRetire = $("#retire-submit");
  
    function extractInputsLoan() {
        
        var firstValue = firstInputLoan.val();
        var secondValue = secondInputLoan.val();
		var thirdValue = thirdInputLoan.val();
		
		if (firstValue === "" && secondValue === "" && thirdValue === ""){
			throw "All fiends are empty. Please provide all details.";
		}		
		if (firstValue === undefined || firstValue === "" || firstValue === null) {
            throw "Loan Amount is not provided";
        }
        if (secondValue === undefined || secondValue === "" || secondValue === null) {
            throw "Monthly Amount is not provided";
        }		
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null) {
            throw "Rate of interest is not provided";
        }
		
        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
		var thirdNumber = parseFloat(thirdValue);
		
        if (isNaN(firstNumber) || firstValue<=0 ) {
            throw "Invalid input for Loan Amount";
        }

        if (isNaN(secondNumber) || secondValue<=0) {
            throw "Invalid input for Monthly Amount";
        }
		
		if (isNaN(thirdNumber) || thirdValue<=0 || thirdValue>=1) {
            throw "Invalid input for Rate of Interest";
        }
    }
	
	function extractInputsInvest() {
        
        var firstValue = firstInputInvest.val();
		var secondValue = secondInputInvest.val();
		var thirdValue = thirdInputInvest.val();
		
		if (firstValue === "" && secondValue === "" && thirdValue === ""){
			throw "All fiends are empty. Please provide all details.";
		}
        if (firstValue === undefined || firstValue === "" || firstValue === null) {
            throw "Years of investment is not provided provided";
        }
        if (secondValue === undefined || secondValue === "" || secondValue === null) {
            throw "Monthly Amount is not provided";
        }
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null) {
            throw "Rate of interest is not provided";
        }

        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
		var thirdNumber = parseFloat(thirdValue);
		
        if (isNaN(firstNumber) || firstValue<=0 ) {
            throw "Invalid input for Loan Amount";
        }

        if (isNaN(secondNumber) || secondValue<=0) {
            throw "Invalid input for Monthly Amount";
        }
		
		if (isNaN(thirdNumber) || thirdValue<=0 || thirdValue>=1) {
            throw "Invalid input for Rate of Interest";
        }
    }
	
	function extractInputsRetire() {
        
        var firstValue = firstInputRetire.val();
		var secondValue = secondInputRetire.val();
		var thirdValue = thirdInputRetire.val();
		
		if (firstValue === "" && secondValue === "" && thirdValue === ""){
			throw "All fiends are empty. Please provide all details.";
		}
        if (firstValue === undefined || firstValue === "" || firstValue === null) {
            throw "Years for retirement is not provided provided";
        }        
        if (secondValue === undefined || secondValue === "" || secondValue === null) {
            throw "Monthly Amount is not provided";
        }		
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null) {
            throw "Rate of interest is not provided";
        }

        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
		var thirdNumber = parseFloat(thirdValue);
		
        if (isNaN(firstNumber) || firstValue<=0 ) {
            throw "Invalid input for Years of retirement";
        }

        if (isNaN(secondNumber) || secondValue<=0) {
            throw "Invalid input for Monthly Amount";
        }
		
		if (isNaN(thirdNumber) || thirdValue<=0 || thirdValue>=1) {
            throw "Invalid input for Rate of Interest";
        }
    }

    btnLoan.click(function () {
        errorAlertLoan.addClass('hidden');
    try {
            extractInputsLoan();
        } catch (error) {
            errorAlertLoan.text(error);
            errorAlertLoan.removeClass('hidden');
        }
    });

    btnInvest.click(function () {
        errorAlertInvest.addClass('hidden');
        try {
            extractInputsInvest();   
        } catch (error) {
            errorAlertInvest.text(error);
            errorAlertInvest.removeClass('hidden');
        }
    });

    btnRetire.click(function () {
        errorAlertRetire.addClass('hidden');
        try {
            extractInputsRetire();
        } catch (error) {
            errorAlertRetire.text(error);
            errorAlertRetire.removeClass('hidden');
        }
    });

})(jQuery);
// jQuery is exported as $ and jQuery
