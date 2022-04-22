const form = document.querySelector('.expense-form');
const table = document.querySelector('table');
const tableBody = document.getElementById('table-body');
const tableTotal = document.getElementById('table-total');
const totalExpense = document.querySelector('#total-expense');



form.addEventListener('submit', e => {
    e.preventDefault();

    let array = [];
    const addItems = () => {
        const items = form.items.value;
        const date = form.date.value;
        const amount = Number(form.amount.value);        

        array.push(amount);

        let tableBody =  `
        <tr>
            <td>${items}</td>
            <td>${date}</td>
            <td>${array}</td>
        </tr>
        `
        table.innerHTML += tableBody;

        console.log(array)
    }
    
    addItems();

    form.reset();
})
totalExpense.addEventListener('click', () => {
    table.innerHTML += `
        <tr>
            <th>Total</th>
            <th></th>
            <th></th>
        </tr>
    `
})

