document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    if (!name || !email || !phone || !address) {
        alert('Please fill in all the required fields.');
        return;
    }

    alert(`
        Order Summary:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
    `);
});
