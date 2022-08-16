/* 
1 Add event handeler with the button
2 get the wintdraw amount form the current balace
2.5 also make sure to convart the input into a number by using parseFloat
3 get previous withdraw total 
4 calculate total withdraw amount
4.2 set totoal withdewa amount
5 get the previous balance total
6 calculate new balance totol
6.5 set the new balace total

7 clear the input field

*/
document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    //
    const withdrwaField = document.getElementById('withdrwa-filed');
    const newWithdreapAmountString = withdrwaField.value;
    const newWithdreaAmount = parseFloat(newWithdreapAmountString);
    
    // Step 3: 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    //Step 4:
    const curretnWithdrawTotal = previousWithdrawTotal + newWithdreaAmount;
    withdrawTotalElement.innerText = curretnWithdrawTotal;

    //Step 5:
    const balaceTotoaelement = document.getElementById('balace-total');
    const previousBlaceTotlaString = balaceTotoaelement.innerText;
    const previousBlactTotal = parseFloat(previousBlaceTotlaString);

    //Step 6:
    const newBalanceTotal = previousBlactTotal - newWithdreaAmount;
    balaceTotoaelement.innerText = newBalanceTotal

    //Step 7: 
    withdrwaField.value = '';

})