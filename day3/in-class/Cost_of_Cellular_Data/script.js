const main = function (input) {
  let myOutputValue = calcPricePerGb(input);
  return myOutputValue;
};

const calcPricePerGb = function (gbUsePerMonth) {
  let priceFor50GbPlan = 19.99;
  let dataPlanPerMonth = 50;
  let noOfDataPlans = Math.ceil(gbUsePerMonth / dataPlanPerMonth);
  let pricePerGb = (priceFor50GbPlan * noOfDataPlans) / gbUsePerMonth;
  return `If the user used ${gbUsePerMonth} GB this month, the user would have been billed for ${noOfDataPlans} 50-GB plan and is paying $${pricePerGb.toFixed(
    2
  )} per GB of data used.`;
};
