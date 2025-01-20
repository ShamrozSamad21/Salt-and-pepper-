function makeReservation() {
const name = document.getElementById("name").value;
const contact = document.getElementById("contact").value;
const people = document.getElementById("people").value;
const date = document.getElementById("date").value;
const time = document.getElementById("time").value;

if (!name) {
alert("Please enter your name.");
return;
}

if (!time) {
alert("Please select a time.");
return;
}

const phoneRegex = /^[0-9]{11}$/;  
if (!phoneRegex.test(contact)) {
alert("Please enter a valid 10-digit contact number.");
return;
}

if (people <= 0) {
alert("Please enter a valid number of people.");
return;
}

alert(`Thank you for your reservation, ${name}! You have reserved a table for ${people} people on ${date} at ${time}. We will contact you at ${contact}.`);
}







