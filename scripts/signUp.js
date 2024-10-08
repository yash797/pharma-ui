document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        let name = document.querySelector('#name').value;
        let dob = document.querySelector('#dob').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;
        let confirmPassword = document.querySelector('#confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let customer = {
            name: name,
            dob: dob,
            email: email,
            password: password
        };

        console.log(customer);
        // window.localStorage.setItem("customer", JSON.stringify(customer)); // Store the customer object in local storage
        // window.location.href = "signIn.html";
        alert("Form Submitted") // Prevent form submission for demonstration purposes

        // For demonstration purposes
        sendCustomerDataAJAX(customer);
    })
});

function sendCustomerDataAJAX(customer){
    let ajaxObject;
    try{
        ajaxObject=new XMLHttpRequest()
    }catch (e){
        try {
            ajaxObject = new ActiveXObject("");
        }catch (e){
            console.log("AJAX not supported....")
        }
    }
    //open the connection
    ajaxObject.open("POST",
        "http://localhost:8080/pharmaappjee_war_exploded/signup-servlet",
        true);
    //servlet call
    ajaxObject.send(JSON.stringify(customer));

    //check request status
    ajaxObject.onreadystatechange=function (){
        if((ajaxObject.readyState==4) && (ajaxObject.status==200)){
            console.log(ajaxObject.responseText);
        }
    }


}