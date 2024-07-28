document.getElementById('infoForm').addEventListener('submit', function(){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const curent = JSON.parse(localStorage.getItem('curent-user')) || [];
    const index = users.findIndex(user => user.username === curent);
    if(index !== -1){
        if(document.getElementById('password').value === users[index].password){
            users[index] ={
                ...users[index],
                password: document.getElementById('new-password').value
            }
            alert("password change");
            localStorage.setItem('users', JSON.stringify(users));
            return;
        }
        alert("curent password isnt correct");
    }
 
});