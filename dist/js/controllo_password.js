// Function to check the password
function checkPassword(type) {
    event.preventDefault(); // permette il controllo della password
    const password = document.getElementById('password').value;
    const correctPassword = '123'; // Replace with your actual password

    if (password === correctPassword) {
        if (type === 'cv') {
            window.location.href = 'assets/Certificati/Industrial Maintenance-Installation.pdf'; // Sostituisci con il percorso effettivo del tuo PDF per il CV
        } if (type === 'certificati') {
            document.getElementById('password').classList.add('d-none');
            document.getElementById('documentList').classList.remove('d-none');
            
        }
    }
    else alert('Incorrect password. Please try again.');
    }
