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

    // Waitlist button and popup form (Home Page)
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

    // Handle waitlist form submission (Home Page)
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
                waitlistForm.reset(); // Reset the form after successful submission
            }, function(error) {
                console.log("FAILED...", error);
                alert("There was an error sending your message. Please try again.");
            });
    }, { once: true });

    // Book Waitlist form handling
    const bookWaitlistButton = document.getElementById("join-waitlist-btn2"); // Updated to match HTML ID
    const bookWaitlistFormPopup = document.getElementById("book-waitlist-form-popup");
    const bookCloseBtn = document.querySelector(".book-close-btn");
    const bookWaitlistForm = document.getElementById("book-waitlist-form");

    // Show book waitlist popup form
    if (bookWaitlistButton) {
        bookWaitlistButton.addEventListener("click", function() {
            bookWaitlistFormPopup.style.display = "block";
        });
    }

    // Close book waitlist popup form
    if (bookCloseBtn) {
        bookCloseBtn.addEventListener("click", function() {
            bookWaitlistFormPopup.style.display = "none";
        });
    }

    // Close book waitlist popup form when clicking outside of the form
    window.addEventListener("click", function(event) {
        if (event.target === bookWaitlistFormPopup) {
            bookWaitlistFormPopup.style.display = "none";
        }
    });

    // Handle book waitlist form submission
    if (bookWaitlistForm) {
        bookWaitlistForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const formData = {
                from_name: document.getElementById("book-name").value,
                reply_to: document.getElementById("book-email").value,
            };

            emailjs.send("service_wrnbapd", "template_vc7abxh", formData)
                .then(function(response) {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Your message has been sent successfully!");
                    bookWaitlistFormPopup.style.display = "none";
                    bookWaitlistForm.reset(); // Reset the form after successful submission
                }, function(error) {
                    console.log("FAILED...", error);
                    alert("There was an error sending your message. Please try again.");
                });
        }, { once: true });
    }

    // Smooth scroll to book section
    document.getElementById("scroll-to-book").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("book").scrollIntoView({ behavior: 'smooth' });
    });

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
