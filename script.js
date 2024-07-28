// Sign Up Logic
document.getElementById('infoForm1').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const gender = document.getElementById('gender').value;
    const nationalCode = document.getElementById('nationalCode').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if(users.find(user => user.username === username)){
        alert("Username used. Try another one!");
        return;
    }
    
    const newUser = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        nationalCode: nationalCode,
        password: password
    };

    users.push(newUser); 
    localStorage.setItem('users', JSON.stringify(users));

    alert("Account added successfully! Now you can login.");
    window.location.href = './index.html';
});

