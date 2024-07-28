
function displayItems() {
    const dataContainer = document.getElementById('data-container');
    const items = JSON.parse(localStorage.getItem('items')) || [];
    
    // Clear previous content
    dataContainer.innerHTML = '';

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemDiv.innerHTML = `
            <input type="checkbox" id = "item-${item.id}" value="${item.id}">
            <label for="item-${item.id}">${item.name}</label>
            <p>رنگ: ${item.color}</p>
            <img src="./images/${item.id}.jpg" alt="${item.name}" />
            <p>قیمت: ${item.price}</p>
            <p>ضخامت: ${item.zekamat}</p>
            <p>سطح کار: ${item.sathKar}</p>
            <p>سایش: ${item.sayesh}</p>
            <p>مصارف: ${item.masraf}</p>
        `;
        dataContainer.appendChild(itemDiv);
    });


    // Attach event listeners to buttons
    document.getElementById('delete-button').addEventListener('click', deleteSelectedItems);
    document.getElementById('edit-button').addEventListener('click', editSelectedItems);
}

function deleteSelectedItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const updatedItems = items.filter(item => !document.getElementById(`item-${item.id}`).checked);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    displayItems(); // Refresh the display
}

function editSelectedItems() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const selectedItems = items.filter(item => document.getElementById(`item-${item.id}`).checked);

    if (selectedItems.length === 0) {
        alert('Please select an item to edit.');
        return;
    }
    else if(selectedItems.length >= 2){
        alert('Please select only one item to edit.');
        return;
    }

    localStorage.setItem('change-item', JSON.stringify(selectedItems[0]));
    
    window.location.href='./edit-item.html';
 
}

// Call the function to display items on page load
displayItems();

document.querySelector('.exit').addEventListener('click', function(){
    localStorage.removeItem('curent-user');
    window.location.href= './index.html';
});

document.querySelector('.change-password').addEventListener('click', function(){
    window.location.href= './change-password.html';
});

const curent = JSON.parse(localStorage.getItem('curent-user')) || [];
document.getElementById('user-info').innerHTML = curent;