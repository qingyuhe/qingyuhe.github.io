const form = document.querySelector("form");
const fullName = document.getElementById("name"); 
const email = document.getElementById("email");
const phone = document.getElementById("phone"); 
const subject = document.getElementById("subject"); 
const message = document.getElementById("message"); 
const success = document.getElementById("submitSuccessMessage")


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> 
        Email: ${email.value}<br>
        Phone: ${phone.value}<br>
        Subject: ${subject.value}<br>
        Message: ${message.value}`;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "hecynthia@gmail.com",
        Password : "D544330883F888E309F3A0CAB8972B938D3A",
        To : 'hecynthia@gmail.com',
        From : "hecynthia@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    });
}

// function checkInputs() {
//     const items = document.querySelectorAll(".form-control");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//     }
// }

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    sendEmail(); 
}); 