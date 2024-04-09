document.getElementById("fetchQR").addEventListener("click", function() {
    fetch('https://example.com/api/getQRCode', {
        method: 'GET', // or 'POST' if required by the API
        headers: {
            'Content-Type': 'application/json', // adjust the content type if necessary
            // add any other headers required by the API
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.blob();
    })
    .then(blob => {
        const qrUrl = URL.createObjectURL(blob);
        const qrImage = document.createElement('img');
        qrImage.src = qrUrl; // Set the src attribute to the URL of the QR code image
        document.getElementById('qrContainer').innerHTML = '';
        document.getElementById('qrContainer').appendChild(qrImage);
    })
    .catch(error => {
        console.error('Error fetching QR code:', error);
    });
});
