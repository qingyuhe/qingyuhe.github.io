const form = document.querySelector("form");
// const fullName = document.getElementById("entry.1487397508"); 
// const email = document.getElementById("entry.532783587");
// const phone = document.getElementById("entry.1776779734"); 
// const subject = document.getElementById("entry.561863393"); 
// const message = document.getElementById("entry.586112070"); 
// const success = document.getElementById("submitSuccessMessage")

var submitted = false;

form.addEventListener("submit", (e) => {
    if (submitted == true) {
        Swal.fire({
            title: "Success!",
            text: "Form submission successful!",
            icon: "success"
        });
    }
});

//equivalent of form.reset(); can't put it anywhere though :(
//var items = document.querySelectorAll(".form-control");
//items.forEach(item => item.value = ""); 

// function sendForm() {
//     if (submitted) {
//         Swal.fire({
//             title: "Success!",
//             text: "Form submission successful!",
//             icon: "success"
//         });
//     }
// }

// function sendEmail() {
//     const bodyMessage = `Full Name: ${fullName.value}<br> 
//         Email: ${email.value}<br>
//         Phone: ${phone.value}<br>
//         Subject: ${subject.value}<br>
//         Message: ${message.value}`;

//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "hecynthia@gmail.com",
//         Password: "D544330883F888E309F3A0CAB8972B938D3A",
//         To: 'hecynthia@gmail.com',
//         From: "hecynthia@gmail.com",
//         Subject: "This is the subject",
//         Body: "This is the body text"
//     }).then(
//         message => alert(message)
//         message => {
//             if (message == "OK") {
//                 Swal.fire({
//                     title: "Success!",
//                     text: "Form submission successful!",
//                     icon: "success"
//                 });
//             }
//         }
//     );
// }

// function checkInputs() {
//     const items = document.querySelectorAll(".form-control");

//     for (const item of items) {
//         if (item.value == "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }

//         if(items[1].value != "") {
//             checkEmail(); 
//         }

//         items[1].addEventListener("keyup", () => {
//             checkEmail();
//         }); 

//         item.addEventListener("keyup", () => {
//             if (item.value !="") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             }
//             else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2-3})(\.[a-z]{2,3})?$/; //don't know where this comes from 
//     const errorTxtEmail = document.querySelector(".invalid-feedback.email");

//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");

//         if (email.value != "") {
//             errorTxtEmail.innerText = "Enter a valid email address";
//         } else {
//             errorTxtEmail.innerText = "Email Address can't be blank"; 
//         }
//     }
//     else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs(); 
//     sendEmail(); 
//     sendForm(); 
//     form.reset();

//     if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
//          sendEmail();
//          form.reset(); 
//          return false; 
//     }
// });

// submitted = false; //added in case it's causing issues; put after event listener?