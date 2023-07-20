let expenses = [];
let totalAmount = [];

const itemInput = document.getElementById('items');
const dateInput = document.getElementById('dates');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const addBtn = document.getElementById('submit');
const tableBody = document.getElementById('table-body');
const totalCont = document.getElementById('total-container');


addBtn.addEventListener('click', () => {
    const item = itemInput.value;
    const date = dateInput.value;
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    if(!item || !date || !amount || !category){
        alert('Please fill in all the boxes!');
        return;
    }
    expenses.push({item, date, amount, category});
    totalAmount.push(amount);

    let  total = 0;

    for(let i=0; i < totalAmount.length; i++){
        total += totalAmount[i];
    };
    console.table(totalAmount);

    totalCont.innerText = `Total: ${total}`;



    const newRow = tableBody.insertRow();

    const itemCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();

    const deleteCell = newRow.insertCell();
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () =>{
        expenses.splice(expenses.indexOf(expense),1);
        totalAmount.splice(totalAmount.indexOf(amount),1);

        let total = 0; 

        for(let i=0; i < totalAmount.length; i++){
            total += totalAmount[i];
        };

        totalCont.innerText = `Total: ${total}`;

        tableBody.removeChild(newRow);
    });



    const expense = expenses[expenses.length - 1];

    itemCell.textContent = expense.item;
    amountCell.textContent = expense.amount;
    dateCell.textContent = expense.date;
    categoryCell.textContent = expense.category;
    deleteCell.appendChild(deleteBtn);

});