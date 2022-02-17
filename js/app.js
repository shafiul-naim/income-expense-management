// get expense details
function getInputValue(expenseName){
    const expenseDetails = document.getElementById(expenseName).value;
    return expenseDetails;
}

// calculate expense
function expense(food, rent, clothes){
        const totalExpense = food+ rent+ clothes;
        return totalExpense;
   
}
// get balance
function balance(myIncome, myExpense){
    
    const myBalanceAmount = myIncome - myExpense;
   
    if(myBalanceAmount > myExpense){
        return myBalanceAmount;
    }
    else{
        const balanceError = document.getElementById('balance-fail');
       balanceError.style.display = 'block';
       return myBalanceAmount;
    }
}

// error message
function errorMessage(messageId, errorCondition){
    if(errorCondition == true){
        const inputError = document.getElementById(messageId);
        inputError.style.display = 'block';
    }
    else{
        const inputError = document.getElementById(messageId);
        inputError.style.display = 'none';
    }

}



// calculate button click
const calculateBtn = document.getElementById('calculate-btn').addEventListener('click',function(){
    // const incomeInput = document.getElementById('income-input');
    // const income = incomeInput.value;
    const income =  parseInt(getInputValue('income-input'));
    const foodExpense = parseInt(getInputValue('food-expense'));
    const rentExpense = parseInt(getInputValue('rent-expense'));
    const clothesExpense = parseInt(getInputValue('clothes-expense'));
    
    if(income > 0 && foodExpense > 0 && rentExpense > 0 && clothesExpense > 0){
    
        const myExpense = expense(foodExpense, rentExpense, clothesExpense);
        document.getElementById('total-expense').innerText = myExpense;
    
        const myBalance = balance(income, myExpense);  
        document.getElementById('remaining-balance').innerText = myBalance;

        errorMessage('input-fail',false);
    }
    
    else{
        errorMessage('input-fail',true);
    }
    
});

document.getElementById('save-button').addEventListener('click', function(){
    const income =  parseInt(getInputValue('income-input'));
    const foodExpense = parseInt(getInputValue('food-expense'));
    const rentExpense = parseInt(getInputValue('rent-expense'));
    const clothesExpense = parseInt(getInputValue('clothes-expense'));
    const saveInput = parseInt(getInputValue('save-percentage'));

    
    
})


