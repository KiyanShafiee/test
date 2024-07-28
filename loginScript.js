document.getElementById('infoForm2').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Login successful!");
        localStorage.setItem("curent-user", JSON.stringify(user.username));
        window.location.href = './slab-window.html'; 
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
