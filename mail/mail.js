// elements
const resultElement = document.getElementById('result');
const emailField = document.getElementById('user-email');
const form = document.querySelector('form');

// authorized emails
const allowedEmails = ['dordo@gmail.com', 'angelino@hotmail.com', 'fras@yahoo.it'];

form.addEventListener('submit', function (event) {
    // !form sending blocked
    event.preventDefault();

    const email = emailField.value.trim();
     
    // !validation
    if (!email) return;

    let isAllowed = false;

    // email control
    for (let i = 0; i < allowedEmails.length; i++) {
        const emailToCheck = allowedEmails[i];

        if (email === emailToCheck) {
            isAllowed = true;
        }
    }


    // output
    const message = isAllowed ? 'Benvenuto' : 'Accesso negato';

    resultElement.innerText = message;
})