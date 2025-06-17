$("#Calculate").click(function () {
    //Input values
    LoanAmount = parseFloat($("#Loan-amount").val()); //since the inputs are strings, we need to convert them into appropriate data types.
    LoanTerm = parseInt($("#Loan-term").val());
    MonthlyIncome = parseFloat($("#Monthly-Income").val());

    //Presence checks
    if (isNaN(LoanAmount)) { //checks if the input is a number or not
        alert("Please enter a loan amount.");
        return;
    }

    if (isNaN(LoanTerm)) {
        alert("Please enter a loan term.");
        return;
    }

    if (isNaN(MonthlyIncome)) {
        alert("Please enter a monthly income.");
        return;
    }

    //Check if the input values are positive and greater than 0
    if (LoanAmount <= 0 || LoanTerm <= 0 || MonthlyIncome <= 0) {
        alert("Please enter positive numbers or greater than 0 for all fields.");
        return;
    }

    MonthlyInterestRate = 0.045 / 12; //monthly interest rate is fixed at 4.5%
    NumOfPayments = LoanTerm * 12; //number of years * 12 months

    //Formula for Monthly Payment
    MonthlyPayment = (LoanAmount * MonthlyInterestRate * Math.pow((1 + MonthlyInterestRate), NumOfPayments)) / (Math.pow((1 + MonthlyInterestRate), NumOfPayments) - 1);

    TotalPayment = MonthlyPayment * NumOfPayments; //Total payment over the loan term
    TotalInterest = TotalPayment - LoanAmount; //Total interest paid over the loan term
    RemainingIncome = MonthlyIncome - MonthlyPayment; //Remaining income after expenses

    // Check if the monthly payment exceeds 30% of the monthly income
    if (MonthlyPayment > MonthlyIncome * 0.30) { 
        alert("Loan denied: Monthly payment exceeds 30% of your income."); //deny the loan if its 30% of the monthly income
    } else {
        if (isNaN(MonthlyPayment) || isNaN(TotalPayment) || isNaN(TotalInterest) || isNaN(RemainingIncome)) { //check if the calculations are valid since it can print not a number.
            alert("An error occurred. Please try again.");
            return;
        }
        else {
            //Approve the loan
            alert("Loan approved!");
            alert("Monthly Payment: £" + MonthlyPayment.toFixed(2)); //round to 2 decimal places
            alert("Total Payment: £" + TotalPayment.toFixed(2));
            alert("Total Interest: £" + TotalInterest.toFixed(2));
            alert("Remaining Income after expenses: £" + RemainingIncome.toFixed(2));
        }
    }
});