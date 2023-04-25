let loanDuration = 10;

const main = function (input) {
  let finalAmount = calcFinalAmount(input);
  let interestAmount = finalAmount - input;
  let monthlyPayment = calcMonthlyPayment(input);
  let myOutputValue = `Final Amount = $${finalAmount};<br>
  Interest = $${interestAmount};<br>
  Monthly Payment = $${monthlyPayment}`;
  return myOutputValue;
};

const calcFinalAmount = function (principalAmount) {
  let intRate = 3 / 100;
  let finalAmount = principalAmount * (1 + intRate) ** loanDuration;
  return finalAmount;
};

const calcMonthlyPayment = function (principalAmount) {
  let noOfMonthsPerYear = 12;
  let noOfMonthtlyPayments = noOfMonthsPerYear * loanDuration;
  let monthlyPayment = calcFinalAmount(principalAmount) / noOfMonthtlyPayments;
  return monthlyPayment;
};
