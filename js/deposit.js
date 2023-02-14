// step 1: add the even listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2: get the deposit amount from deposit field
    // for input field use the .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(typeof newDepositAmount);
    const depositTotalAmount = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalAmount.innerText = currentDepositTotal;

    // step5:get the current balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step6: calculate the current total balance
    const currentNewBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = currentNewBalanceTotal;



// step 7: clear the deposit field
    depositField.value = '';

})