console.log("scripts.js file is loaded");


document.addEventListener("DOMContentLoaded", function() {
        console.log("DOM fully loaded and parsed");
    // EmailJS configuration
    emailjs.init("qZCMk0yO7Rwu_EXe2"); // Replace with your EmailJS user ID
    console.log("EmailJS initialized");

    // Handle contact form submission
    document.querySelector("#contact form").addEventListener("submit", function(event) {
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

    // Waitlist buttons and popup forms
    const waitlistButtons = document.querySelectorAll(".waitlist-button");
    const popupForms = document.querySelectorAll(".popup-form");
    const closeBtns = document.querySelectorAll(".close-btn");

    // Show popup form when any waitlist button is clicked
    waitlistButtons.forEach(button => {
        button.addEventListener("click", function() {
            const isBookButton = button.closest('#book');
            if (isBookButton) {
                document.querySelector("#book-waitlist-form-popup").style.display = "block";
            } else {
                document.querySelector("#waitlist-form-popup").style.display = "block";
            }
        });
    });

    // Close popup forms
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            btn.closest('.popup-form').style.display = "none";
        });
    });

    // Close popup forms when clicking outside of them
    window.addEventListener("click", function(event) {
        popupForms.forEach(form => {
            if (event.target === form) {
                form.style.display = "none";
            }
        });
    });

    // Handle waitlist form submission for the first form
    document.getElementById("waitlist-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            from_name: document.getElementById("name").value,
            reply_to: document.getElementById("email").value,
        };

        emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                document.querySelector("#waitlist-form-popup").style.display = "none";
                document.getElementById("waitlist-form").reset(); // Reset the form after successful submission
            }, function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again.");
            });
    }, { once: true }); // Attach the event listener only once

    // Handle waitlist form submission for the second form
    document.getElementById("book-waitlist-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = {
            from_name: document.getElementById("name").value,
            reply_to: document.getElementById("email").value,
        };

        emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your message has been sent successfully!");
                document.querySelector("#book-waitlist-form-popup").style.display = "none";
                document.getElementById("book-waitlist-form").reset(); // Reset the form after successful submission
            }, function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again.");
            });
    }, { once: true }); // Attach the event listener only once

    // Hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("header nav ul");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Close the menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});


