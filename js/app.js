const form = document.querySelector('.expense-form');
const table = document.querySelector('table');

form.addEventListener('submit', e => {
    e.preventDefault();

    const addItems = () => {
        const items = form.items.value;
        const date = form.date.value;
        const amount = form.amount.value;

        table.innerHTML += `
        <tr>
            <td>${items}</td>
            <td>${date}</td>
            <td>${amount}</td>
        </tr>
        `
    }
    addItems();

    form.reset();
})