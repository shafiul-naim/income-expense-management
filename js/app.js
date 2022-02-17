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
    return myBalanceAmount;
}

// saving 

function newRemainingBalance(myBalance, savingAmount){
    const remainingBalance = (myBalance - savingAmount).toFixed(2);
    return remainingBalance;
}

function savePercentage(incomeAmount, saveInputAmount){
    const save = (incomeAmount * saveInputAmount) / 100;
    return save;
}

// error message
function errorMessage(messageId, errorCondition){
    const inputError = document.getElementById(messageId);

    if(errorCondition == true){
        inputError.style.display = 'block';
        document.getElementById('balance-fail').style.display = 'none';
        document.getElementById('string-fail').style.display = 'none';
    }
    else{
        inputError.style.display = 'none';
    }
}
function errorMessage2(messageId,myExpense, income){
    const balanceError = document.getElementById(messageId);
    
    if(income<myExpense){
        balanceError.style.display = 'block';
        document.getElementById('input-fail').style.display = 'none';
        document.getElementById('string-fail').style.display = 'none';
    }
    else{
        balanceError.style.display = 'none';
    }
}

function errorMessage3(messageId, savingAmount, newBalance){
    const savingError = document.getElementById(messageId);
    if(savingAmount > newBalance){
        savingError.style.display = 'block';
        document.getElementById('input-fail').style.display = 'none';
        document.getElementById('string-fail').style.display = 'none';
    }
    else{
        savingError.style.display = 'none';
    }
}

function errorMessage4(messageId, errorCondition){
    const stringError = document.getElementById(messageId);
    
    if(errorCondition == true){
        stringError.style.display = 'block';
        document.getElementById('balance-fail').style.display = 'none';
        document.getElementById('input-fail').style.display = 'none';
    }
    else{
        stringError.style.display = 'none';
    }
}





// calculate button click
const calculateBtn = document.getElementById('calculate-btn').addEventListener('click',function(){
   
    const income =  getInputValue('income-input');
    const foodExpense = getInputValue('food-expense');
    const rentExpense =  getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');

    const incomeValue = parseInt(getInputValue('income-input'));
    const foodExpenseValue = parseInt(getInputValue('food-expense'));
    const rentExpenseValue = parseInt(getInputValue('rent-expense'));
    const clothesExpenseValue = parseInt(getInputValue('clothes-expense'));
    
    if(isNaN(income) == false && isNaN(foodExpense) == false && isNaN(rentExpense) == false && isNaN(clothesExpense) == false){
        if(incomeValue > 0 && foodExpenseValue > 0 && rentExpenseValue > 0 && clothesExpenseValue > 0){
           
            const myExpense = expense(foodExpenseValue, rentExpenseValue, clothesExpenseValue);
            document.getElementById('total-expense').innerText = myExpense;
        
            const myBalance = balance(incomeValue, myExpense);  
            document.getElementById('remaining-balance').innerText = myBalance;
           
            
            errorMessage('input-fail',false);
            errorMessage2('balance-fail', myExpense, incomeValue);
            errorMessage4('string-fail',false);
        }
        
        else{
            errorMessage('input-fail',true);
        }
    }
    else{
        errorMessage4('string-fail',true);
    }
   
    

    
    
});
//  save button click

document.getElementById('save-button').addEventListener('click', function(){
    
    const income =  getInputValue('income-input');
    const foodExpense = getInputValue('food-expense');
    const rentExpense =  getInputValue('rent-expense');
    const clothesExpense = getInputValue('clothes-expense');
    const saveInput = getInputValue('save-percentage');

    const incomeValue = parseInt(getInputValue('income-input'));
    const foodExpenseValue = parseInt(getInputValue('food-expense'));
    const rentExpenseValue = parseInt(getInputValue('rent-expense'));
    const clothesExpenseValue = parseInt(getInputValue('clothes-expense'));
    const saveInputValue = parseInt(getInputValue('save-percentage'));
    
    if(isNaN(income) == false && isNaN(foodExpense) == false && isNaN(rentExpense) == false && isNaN(clothesExpense) == false && isNaN(saveInput) == 0){
        console.log('number1');
        if(incomeValue > 0 && foodExpenseValue > 0 && rentExpenseValue > 0 && clothesExpenseValue > 0 && saveInputValue > 0){
            console.log('number2');
    
            const savingAmount = savePercentage(incomeValue,saveInputValue);
            document.getElementById('saving-amount').innerText = savingAmount;
    
            const myExpense = expense(foodExpenseValue, rentExpenseValue, clothesExpenseValue);
            const myBalance = balance(incomeValue, myExpense);
            const remainingBalance = newRemainingBalance(myBalance, savingAmount);
    
            document.getElementById('new-remaining-balance').innerText = remainingBalance;
    
            errorMessage('input-fail',false);
            errorMessage3('saving-fail', savingAmount, myBalance)
        }
        else{
            errorMessage('input-fail',true);
        }
    }
    else{
       alert("please enter a number");
    }
    
    
});
