const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');





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
    
    checkUI();

}

// Event Listeners 

itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
clearButton.addEventListener('click',clearItems);

function removeItem(e){
    if(e.target.classList.contains('fa-xmark')){
         if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
         }
        
    }

    checkUI();
    
}

function clearItems(e){
    

    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
    }
   

    checkUI();
    
    
}

// check UI

function checkUI(){
    const items = itemList.querySelectorAll('li');
    if(items.length === 0){
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none';
    }else
     {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';


    }
}










