const form = document.querySelector('.expense-form');
const table = document.querySelector('table');
const totalExpense = document.querySelector('#total-expense');
// const tableData = document.querySelector('.table-data');

form.addEventListener('submit', e => {
    e.preventDefault();

    const addItems = () => {
        const items = form.items.value;
        const date = form.date.value;
        const amount = Number(form.amount.value);        

        table.innerHTML += `
        <tr>
            <td>${items}</td>
            <td>${date}</td>
            <td>${amount}</td>
        </tr>
        `

        // totalExpense.addEventListener('click', () => {
        //     table.innerHTML += `
        //         <tr>
        //             <th>Total</th>
        //             <th></th>
        //             <th></th>
        //         </tr>
        //     `
        // })
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