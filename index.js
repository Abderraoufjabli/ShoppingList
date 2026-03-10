const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');

// function creation button

function createButton(classes){
    const button = document.createElement('button');
    button.className=classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;

}
//function creation icon

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className=classes;
    return icon;   

}





function addItem(e) {

    e.preventDefault();
    const newItem = itemInput.value;

    // validate Input 
    if(newItem === ''){
        alert('Please add an item');
        return
    }

    const li = document.createElement('li');
    const text = document.createTextNode(newItem);
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(text);
    li.appendChild(button);
    itemList.appendChild(li);
    itemInput.value = '';    

}

// Event Listeners 

itemForm.addEventListener('submit',addItem);

