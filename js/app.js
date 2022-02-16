const calculateBtn = document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;

    const foodExpense = parseInt(expenseList('food-expense'));
    const rentExpense = parseInt(expenseList('rent-expense'));
    const clothesExpense = parseInt(expenseList('clothes-expense'));
    // const rentExpense = parseInt(document.getElementById('').value);
    // const clothesExpense =parseInt(document.getElementById('clothes-expense').value);
   
    /* const totalExpense =parseInt(document.getElementById('total-expense').value);
    const clothesExpense =parseInt(document.getElementById('remaining-balance').value); */
    
    const myExpense = expense(foodExpense, rentExpense, clothesExpense);
    document.getElementById('total-expense').innerText = myExpense;
})


function expenseList(expenseName){
    const expenseDetails = document.getElementById(expenseName).value;
    document.getElementById(expenseName).value = "";
    return expenseDetails;
}

function expense(food, rent, clothes){
    const totalExpense = food+ rent+ clothes;
    return totalExpense;
}