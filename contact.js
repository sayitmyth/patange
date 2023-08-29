// the contact EmailJS
    document.addEventListener("DOMContentLoaded", function () {
        // Initialize EmailJS with your user ID
        emailjs.init("user_your_emailjs_service_407c5ql");

        const form = document.querySelector("#contact-form");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            
            // Fetch form data
            const email = document.querySelector("#email").value;
            const subject = document.querySelector("#subject").value;
            const message = document.querySelector("#message").value;

            // Send email using EmailJS
            emailjs.send("your_emailjs_service_407c5ql", "your_emailjs_template_hvnzvxf", {
                email: email,
                subject: subject,
                message: message
            })
            .then(function(response) {
                console.log("Email sent successfully", response);
                // You can display a success message to the user
                alert("Message sent successfully!");
            }, function(error) {
                console.error("Email could not be sent", error);
                // You can display an error message to the user
                alert("An error occurred. Please try again later.");
            });
        });
    });

