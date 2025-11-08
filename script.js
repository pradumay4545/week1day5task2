document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault(); 
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

   
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let isValid = true;

    
    if(name === ""){
        document.getElementById("nameError").innerHTML = "Please enter your name";
        isValid = false;
    }

    
    if(email === ""){
        document.getElementById("emailError").innerHTML = "Please enter your email";
        isValid = false;
    }

   
    if(password === ""){
        document.getElementById("passwordError").innerHTML = "Please enter your password";
        isValid = false;
    }

   
    if(isValid){
        alert("Form Submitted Successfully!");
    }

});