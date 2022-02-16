const calculateBtn = document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;

    const foodExpense = parseInt(expenseList('food-expense'));
    const rentExpense = parseInt(expenseList('rent-expense'));
    const clothesExpense = parseInt(expenseList('clothes-expense'));
    
    
    const myExpense = expense(foodExpense, rentExpense, clothesExpense);
    document.getElementById('total-expense').innerText = myExpense;
    
    const myBalance = document.getElementById('remaining-balance');
    myBalanceAmount = income - myExpense;
    myBalance.innerText = myBalanceAmount;
})


function expenseList(expenseName){
    const expenseDetails = document.getElementById(expenseName).value;
    // document.getElementById(expenseName).value = "";
    return expenseDetails;
}

function expense(food, rent, clothes){
    
    if(food>0 && rent>0 && clothes>0){
        const totalExpense = food+ rent+ clothes;
        return totalExpense;
    }
    else{
        alert('enter a valid input');
    }
   
   
}