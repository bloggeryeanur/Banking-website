/* ////////Step 1: add event listener to the deposte button
document.getElementById('btn-deposte').addEventListener('click',function(){
   ////////Stpe 2: get the deposte amount from the depost input fild
   const deposteField = document.getElementById("deposite-field");
   const newDeposteAmountString = deposteField.value;
   const newDeposteAmount = parseFloat(newDeposteAmountString);
 
   //////////Step 3: get the current deposte total
   ///////////for not input (elemtn other then input textarea) use innerText to get the text
   const deposteTotalElement = document.getElementById('deposite-total');
   const previousDeposteTotalString = deposteTotalElement.innerText;
    const previousDeposteTotal = parseFloat(previousDeposteTotalString);
   deposteTotalElement.innerText = newDeposteAmount;

   ///////////Step 4: add number to set the total deposit
   const currrentDeposteTotal = previousDeposteTotal + newDeposteAmount
   deposteTotalElement.innerText = currrentDeposteTotal


   /////////Step 5: get balace curretnt totla
   const balaceTottalElement = document.getElementById('balace-total');
  const previousBalanceTotalString  = deposteTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  ////////Step 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDeposteAmount;
  //////set the balance total
  balaceTottalElement.innerText = currentBalanceTotal
   

   //////Step 7: clear the deposte field
   deposteField.value = '';

})

 */
//Try myself 
document.getElementById('btn-deposte').addEventListener('click', function () {
const getDepositeField = document.getElementById('deposite-field');
const getDeposteValue = getDepositeField.value;
const getDepositeAamount = parseFloat(getDeposteValue);

const getPreviousDeposite = document.getElementById('deposite-total');
const getDepositeInnertText = getPreviousDeposite.innerText;
const getPreviousAmount = parseFloat(getDepositeInnertText)
getPreviousDeposite.innerText = getDepositeAamount



})