const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggle the "show" class on click
    });

console.log("scripts.js file is loaded");

document.addEventListener("DOMContentLoaded", function() {
    // EmailJS configuration
    emailjs.init("qZCMk0yO7Rwu_EXe2");

    // Handle contact form submission
    document.querySelector("#contact form").addEventListener("submit", function(event) {
        event.preventDefault();

        var formData = {
            from_name: document.querySelector("#name").value,
            message: document.querySelector("#message").value,
            reply_to: document.querySelector("#email").value,
        };

        emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
            }, function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again.");
            });
    });
});
