const changeItem = JSON.parse(localStorage.getItem('change-item'));
document.getElementById('itemName').placeholder= changeItem.name;
document.getElementById('itemColor').placeholder= changeItem.color;
document.getElementById('itemPrice').placeholder= changeItem.price;
document.getElementById('itemSathKar').placeholder= changeItem.sathKar;
document.getElementById('itemSayesh').placeholder= changeItem.sayesh;
document.getElementById('itemZekamat').placeholder= changeItem.zekamat;

function updateItem(chItem) {
    //const changeItem = JSON.parse(localStorage.getItem('change-item'));
    const items = JSON.parse(localStorage.getItem('items')) || [];

    if (changeItem) {
        const index = items.findIndex(item => item.id === changeItem.id);
        if (index !== -1) {
            if(chItem.name !==''){
                items[index] = {
                    ...items[index],
                    name: chItem.name,
                };
            }
            if(chItem.price !==''){
                items[index] = {
                    ...items[index],
                    price: chItem.price,
                };
            }
            if(chItem.color !==''){
                items[index] = {
                    ...items[index],
                    color: chItem.color,
                }
            }
            if(chItem.zekamat !==''){
                items[index] = {
                    ...items[index],
                    zekamat: chItem.zekamat,
                };
            }

            if(chItem.sathKar !==''){
                items[index] = {
                    ...items[index],
                    sathKar: chItem.sathKar,
                };
            }
            if(chItem.sayesh !==''){
                items[index] = {
                    ...items[index],
                    sayesh: chItem.sayesh,
                };
            }

            if(chItem.masraf !==''){
                items[index] = {
                    ...items[index],
                    masraf: chItem.masraf,
                };
            }
           

            localStorage.setItem('items', JSON.stringify(items));
            localStorage.removeItem('change-item');

            alert("تغییرات با موفقیت ذخیره شد!");
        } else {
            alert("آیتمی برای به روز رسانی پیدا نشد.");
        }
    } else {
        alert("هیچ تغییراتی برای ذخیره وجود ندارد.");
    }
    window.location.href='./show-list-slabs.html'
}

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const updatedItem = {
        name: document.getElementById('itemName').value,
        price: document.getElementById('itemPrice').value,
        color: document.getElementById('itemColor').value,
        zekamat: document.getElementById('itemZekamat').value,
        sathKar: document.getElementById('itemSathKar').value,
        sayesh: document.getElementById('itemSayesh').value,
        masraf: document.getElementById('itemMasraf').value
    };

    updateItem(updatedItem);
});

document.querySelector('.exit').addEventListener('click', function(){
    localStorage.removeItem('curent-user');
    window.location.href= './index.html';
});

document.querySelector('.change-password').addEventListener('click', function(){
    window.location.href= './change-password.html';
});

const curent = JSON.parse(localStorage.getItem('curent-user')) || [];
document.getElementById('user-info').innerHTML = curent;