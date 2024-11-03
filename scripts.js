document.addEventListener("DOMContentLoaded", function() {
    console.log("scripts.js file is loaded");

    // Initialize EmailJS
    emailjs.init("qZCMk0yO7Rwu_EXe2");

    // Select the form using the correct ID
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
        console.log("Contact form found:", contactForm);

        // Handle contact form submission
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Gather form data
            var formData = {
                from_name: document.querySelector("#name").value,
                message: document.querySelector("#message").value,
                reply_to: document.querySelector("#email").value,
            };

            // Send email with EmailJS
            emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your message has been sent successfully!");
                }, function(error) {
                    console.log("FAILED...", error);
                    alert("There was an error sending your message. Please try again.");
                });
        });
    } else {
        console.error("Contact form not found. Check the #contact-form selector.");
    }
});
