//Budget management//
window.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const totalExpenses = document.getElementById('totalExpenses');

    let expenses = [];
    let expenseId = 1;

    // Function to add an expense
    const addExpense = (name, amount) => {
        const expense = {
            id: expenseId,
            name,
            amount
        };
        expenses.push(expense);
        expenseId++;

        // Update the UI
        updateExpenseList();
        updateTotalExpenses();

        // Clear the form inputs
        expenseForm.reset();
    };

    // Function to delete an expense

    function deleteExpense(expenseId) {
        expenses = expenses.filter((expense) => expense.id !== expenseId);

        // Update the UI
        updateExpenseList();
        updateTotalExpenses();
    }

    // Function to update the expense list in the UI
    function updateExpenseList() {
        expenseList.innerHTML = '';

        expenses.forEach((expense) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${expense.name}: Rs ${expense.amount}</span>
                <button onclick="deleteExpense(Rs ${expense.id})">Delete</button>
            `;
            expenseList.appendChild(listItem);
        });
    }

    // Function to update the total expenses in the UI
    const updateTotalExpenses = () => {
        const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        totalExpenses.textContent = total.toFixed(2);
    };

    // Event listener for expense form submission
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = document.getElementById('expenseAmount').value;

        if (expenseName.trim() === '' || expenseAmount.trim() === '') {
            Swal.fire('Error', 'Please enter both expense name and amount', 'error');
            return;
        }

        addExpense(expenseName, expenseAmount);
    });
});
