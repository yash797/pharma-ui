document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#signInForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration purposes

        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;

        let storedCustomer = JSON.parse(window.localStorage.getItem("customer"));
        console.log(storedCustomer);
        if (storedCustomer.email === email && storedCustomer.password === password) {
            window.location.href = "index.html";
            alert("Sign in successful!");

            // Redirect to a different page or perform other actions
        } else {
            alert("Invalid email or password!");
        }
    });
});