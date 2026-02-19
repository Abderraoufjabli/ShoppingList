
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const itemForm = document.getElementById('item-form');

console.dir(itemForm);

itemForm.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value.trim();

    if (newItem !== '') {
        const li = document.createElement('li');
        li.textContent = newItem;
        itemList.appendChild(li);
        itemInput.value = '';
        const button = document.createElement('button');
        button.className = 'remove-item btn-link text-red';
        button.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        li.appendChild(button);

    }
}




