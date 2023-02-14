

// step-1
document.getElementById('btn-withdraw').addEventListener("click", function () {
    // step-2
    const withDrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withDrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);
    // step-4
    const currentWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7
    withDrawField.value = '';




})