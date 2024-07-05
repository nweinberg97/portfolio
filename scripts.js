console.log("scripts.js file is loaded");

document.addEventListener("DOMContentLoaded", function() {
    // EmailJS configuration
    emailjs.init("qZCMk0yO7Rwu_EXe2"); // Replace with your EmailJS user ID

    // Handle contact form submission
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

    // Waitlist button and popup form
    const waitlistButton = document.getElementById("join-waitlist-btn");
    const waitlistFormPopup = document.getElementById("waitlist-form-popup");
    const closeBtn = document.querySelector(".close-btn");
    const waitlistForm = document.getElementById("waitlist-form");

    // Show popup form
    waitlistButton.addEventListener("click", function() {
        waitlistFormPopup.style.display = "block";
    });

    // Close popup form
    closeBtn.addEventListener("click", function() {
        waitlistFormPopup.style.display = "none";
    });

    // Close popup form when clicking outside of the form
    window.addEventListener("click", function(event) {
        if (event.target === waitlistFormPopup) {
            waitlistFormPopup.style.display = "none";
        }
    });

    // Handle waitlist form submission
    waitlistForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            from_name: document.getElementById("name").value,
            reply_to: document.getElementById("email").value,
        };

        emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                waitlistFormPopup.style.display = "none";
            }, function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again.");
            });
    });
});
