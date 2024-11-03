document.addEventListener("DOMContentLoaded", function() {
    console.log("scripts.js file is loaded");

    // Initialize EmailJS
    emailjs.init("qZCMk0yO7Rwu_EXe2");

    // Select the form, submit button, and feedback message container
    const contactForm = document.querySelector("#contact-form");
    const feedbackMessage = document.querySelector("#form-feedback");
    const submitButton = document.querySelector("#submit-button");

    if (contactForm) {
        console.log("Contact form found:", contactForm);

        // Handle contact form submission
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Disable the submit button and change the text to indicate processing
            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            // Reset feedback message
            feedbackMessage.textContent = "";
            feedbackMessage.classList.remove("feedback-success", "feedback-error");

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
                    feedbackMessage.textContent = "Your message has been sent successfully!";
                    feedbackMessage.classList.add("feedback-success");
                    feedbackMessage.style.display = "block";
                    contactForm.reset(); // Clear the form

                    // Re-enable the submit button and reset text
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit";
                }, function(error) {
                    console.log("FAILED...", error);
                    feedbackMessage.textContent = "There was an error sending your message. Please try again.";
                    feedbackMessage.classList.add("feedback-error");
                    feedbackMessage.style.display = "block";

                    // Re-enable the submit button and reset text
                    submitButton.disabled = false;
                    submitButton.textContent = "Submit";
                });
        });
    } else {
        console.error("Contact form not found. Check the #contact-form selector.");
    }
});
