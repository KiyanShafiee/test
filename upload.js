document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('photo');
    const formData = new FormData();
    formData.append('photo', fileInput.files[0]);

    fetch('http://localhost:5500/upload.php', { // Adjust the URL if necessary
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
