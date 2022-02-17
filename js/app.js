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
    // const balanceError = document.getElementById('balance-fail');
    const myBalanceAmount = myIncome - myExpense;
    return myBalanceAmount;
    
    /* if(myExpense > myIncome){
        balanceError.style.display = 'block';
        return myBalanceAmount;
    }
    else{
       balanceError.style.display = 'none';
       return myBalanceAmount;
    } */
}

// error message
function errorMessage(messageId, errorCondition){
    const inputError = document.getElementById(messageId);
    
    if(errorCondition == true){
        inputError.style.display = 'block';
    }
    else{
        inputError.style.display = 'none';
    }
}
function errorMessage2(messageId,myExpense, income){
    const balanceError = document.getElementById(messageId);
    
    if(income<myExpense){
        
        balanceError.style.display = 'block';
    }
    else{
        balanceError.style.display = 'none';
    }
}

function errorMessage3(messageId, savingAmount, newBalance){
    const savingError = document.getElementById(messageId);
    if(savingAmount > newBalance){
        savingError.style.display = 'block';
    }
    else{
        savingError.style.display = 'none';
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
       
        // const myBalance =income - myExpense;  
        // document.getElementById('remaining-balance').innerText = myBalance;
        // errorMessage2(income, myExpense);
        
        errorMessage('input-fail',false);
        errorMessage2('balance-fail', myExpense, income);
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

    if(income > 0 && foodExpense > 0 && rentExpense > 0 && clothesExpense > 0 && saveInput>0){
        const savingAmount = savePercentage(income,saveInput);
        document.getElementById('saving-amount').innerText = savingAmount;
    
        const myExpense = expense(foodExpense, rentExpense, clothesExpense);
        const myBalance = balance(income, myExpense);
        const remainingBalance = newRemainingBalance(myBalance, savingAmount);
       
        document.getElementById('new-remaining-balance').innerText = remainingBalance;

        errorMessage('input-fail',false);
        errorMessage3('saving-fail', savingAmount, remainingBalance);
    }
    else{
        errorMessage('input-fail',true);
    }
     
})

function newRemainingBalance(myBalance, savingAmount){
    const remainingBalance = myBalance - savingAmount;
    return remainingBalance;
}

function savePercentage(incomeAmount, saveInputAmount){
    const save = (incomeAmount * saveInputAmount) / 100;
    return save;
}
