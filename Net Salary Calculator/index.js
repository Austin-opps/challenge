let grossSalary = "";
let taxRates = "";
function calculateTaxRate(grossSalary = 0){
if(grossSalary >= 24000 && grossSalary <= 288000){
  return taxRates = 0.01
}else if(grossSalary > 288000 && grossSalary <= 388000){
  return taxRates = 0.25
}else {
  return taxRates = 0.30
}
}
calculateTaxRate();



//NHIF calculation
function CalculateNhif(grossPay) {
    let nhif;
    if (grossPay <= 5999) {
      nhif = 150;
    } else if (grossPay <= 7999) {
      nhif = 300;
    } else if (grossPay <= 11999) {
      nhif = 400;
    } else if (grossPay <= 14999) {
      nhif = 500;
    } else if (grossPay <= 19999) {
      nhif = 600;
    } else if (grossPay <= 24999) {
      nhif = 750;
    } else if (grossPay <= 29999) {
      nhif = 850;
    } else if (grossPay <= 34999) {
      nhif = 900;
    } else if (grossPay <= 39999) {
      nhif = 950;
    } else if (grossPay <= 44999) {
      nhif = 1000;
    } else if (grossPay <= 49999) {
      nhif = 1100;
    } else if (grossPay <= 59999) {
      nhif = 1200;
    } else if (grossPay <= 69999) {
      nhif = 1300;
    } else if (grossPay <= 79999) {
      nhif = 1400;
    } else if (grossPay <= 89999) {
      nhif = 1500;
    } else if (grossPay <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }
    return nhif;
  }
  CalculateNhif();

  //NSSF rates
  function CalculateNSSF(nssfdeduction, grossPay){

    if(nssfdeduction > 0 && nssfdeduction < 72000){
        totaldeductions = grossPay*0.06
    //this else condition takes care of people using tire II model to make their nssf deductions 
    }else if(nssfdeduction>72001&& nssfdeduction <216801){
    totaldeductions=grossPay*0.06
    }else{
        return totaldeductions=`The deductions are neither in Tire I or II`
    }
    return totaldeductions;
    }
    CalculateNSSF();

    //Total taxable salay calculatoin
    function calculateTaxableIncome(grossSalary, contributionBenefit=0, disability=0, haveMortgage=0, mortgageInterest=0, haveLifeInsurancePolicy=0, insurancePremium=0, homeOwnershipSavings=0, homeOwnershipTotalDeposit=0) {

        let taxableIncome = grossSalary - contributionBenefit
      
        if (disability>=150000&& disability<=1800000) {
          taxableIncome =  taxableIncome - homeOwnershipTotalDeposit- insurancePremium- mortgageInterest-disability
        }else{
          taxableIncome =  taxableIncome - homeOwnershipTotalDeposit- insurancePremium- mortgageInterest-disability
        }
       return taxableIncome
      }
      calculateTaxableIncome();



    //Final calculation for PAYE, DEDUCTIONS AND THE NETPAY
 
    TaxablePay = calculateTaxableIncome();
let Relief = 24000;
let PAYEE = (TaxablePay * taxRates) - Relief;
let nhif = CalculateNhif(grossPay);
let nssf = CalculateNSSF(nssfdeduction,grossPay);
let StatutoryDeductions = nssf + nhif;


let TaxablePay = GrossPay - StatutoryDeductions - PersonalRelief;
const  NetIncome = GrossPay - StatutoryDeductions - PAYE;



PAYEE = (TaxablePay * TaxRate) - Relief
console(NetIncome)
PAYEE();