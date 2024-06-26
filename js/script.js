let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}   

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const quantity = document.getElementById('quantity').value;
    const roomType = document.getElementById('concert').value;
    const agree = document.getElementById('agree').checked;

    // Check if all fields are filled and the checkbox is checked
    if (name && quantity && roomType && agree) {
        // Use SweetAlert to display the values
        Swal.fire({
            title: 'Room Booking Details',
            html: `
                <strong>Name:</strong> ${name}<br>
                <strong>Room Quantity:</strong> ${quantity}<br>
                <strong>Room Type:</strong> ${roomType}<br>
                <strong>Agreed to terms:</strong> ${agree ? 'Yes' : 'No'}
            `,
            icon: 'success',
            confirmButtonText: 'Close'
        }).then(() => {
            // Add booking to the list after the modal is closed
            const ticketList = document.getElementById('ticket-list');
            const ticketItem = document.createElement('li');
            ticketItem.className = 'list-group-item';
            ticketItem.textContent = `Name: ${name}, Room Quantity: ${quantity}, Room Type: ${roomType}`;
            ticketList.appendChild(ticketItem);

            // Reset form
            document.getElementById('ticket-form').reset();
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Please fill out all fields and agree to the terms and conditions.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}
