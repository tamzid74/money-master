
// const clothsField = document.getElementById('cloths-field');

const calculator = document.getElementById('Calculate-btn');
const save = document.getElementById('save-btn');


calculator.addEventListener('click',function(){
    const incomeField = getInputValue('income-field'); 
    const foodField = getInputValue('food-field');
    const rentField = getInputValue('rent-field') ;
    const clothsField = getInputValue('cloths-field') ;
    const totalExpense = foodField + rentField + clothsField;
    setInnerText('total-expense',totalExpense);  
    const totalBalance = incomeField - totalExpense;
    setInnerText('total-balance',totalBalance);
});

save.addEventListener('click', function(){
    const incomeField = getInputValue('income-field'); 
    const foodField = getInputValue('food-field');
    const rentField = getInputValue('rent-field') ;
    const clothsField = getInputValue('cloths-field') ;
    const save = getInputValue('discount-field');
    const savingAmount = (incomeField*save) / 100;
    setInnerText('saving',savingAmount);
    const totalExpense = foodField + rentField + clothsField;
    const totalBalance = incomeField - totalExpense;
    const remainingBalance = totalBalance-savingAmount; 
    setInnerText('remaining',remainingBalance);

    
})

function getInputValue(fieldID){
    const inputField = document.getElementById(fieldID);
    const inputText= inputField.value;
    const input = parseFloat(inputText);
    return input;
}


function setInnerText(elementId,value){
    const elementValue = document.getElementById(elementId);
    elementValue.innerText = value;
}


