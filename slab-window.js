document.querySelector('.exit').addEventListener('click', function(){
    localStorage.removeItem('curent-user');
    window.location.href= './index.html';
});

document.querySelector('.change-password').addEventListener('click', function(){
    window.location.href= './change-password.html';
});

const curent = JSON.parse(localStorage.getItem('curent-user')) || [];
document.getElementById('user-info').innerHTML = curent;