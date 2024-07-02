console.log("scripts.js file is loaded");

document.addEventListener("DOMContentLoaded", function() {
    // EmailJS configuration
    emailjs.init("qZCMk0yO7Rwu_EXe2"); // Replace with your EmailJS user ID

    // Handle form submission
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form data
        var formData = {
            from_name: document.querySelector("#name").value,
            message: document.querySelector("#message").value,
            reply_to: document.querySelector("#email").value,
        };

        // Send email
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
