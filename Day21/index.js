










// Initialize EmailJS with your User ID (public API key)
emailjs.init('2BIUJo6skrdBcpbpx'); // Replace with your EmailJS User ID

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_cdvzgyn", "template_eixd9sd", params)
        .then(() => {
            alert("Email sent successfully");
            document.getElementById("contact-form").reset(); // Reset the form after sending
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again later.");
        });
}

// Add event listener to the form
document.getElementById("contact-form").addEventListener("submit", sendEmail);













// function sendEmail(){
//     let params = {
//         name   : document.getElementById("name").value,
//         email  :  document.getElementById("email").value,
//         message:  document.getElementById("message").value,
//     }

//     emailjs.send("service_cdvzgyn","template_eixd9sd",params).then(alert("Email sent successfully"))
// }