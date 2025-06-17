Submitbtn = document.getElementById("Submit");

Submitbtn.onclick = function() { //check the validation when the user clicks the submit button.
    //take the value of the user's input.
    Name = document.getElementById("Name").value;
    Email = document.getElementById("Email").value;
    Subject = document.getElementById("Subject").value;
    Specify = document.getElementById("Specify").value;
    
    //Presence checks
    if (Name == "") {
        alert("Please enter your name.");
        return false; //function returns false when the user does not enter their name.
    }
    
    if (Email == "") {
        alert("Please enter your email.");
        return false;
    }

    //check if the email contains the "@" symbol.
    if (Email.includes("@") == false) {
        alert("Please enter a valid email. (Must contain '@' and end with '.com')");
        return false;
    }

    //emai needs to end with ".com"
    if (Email.endsWith(".com") == false) {
        alert("Please enter a valid email. (Must contain '@' and end with '.com')");
        return false;
    }
    
    //User needs to choose an appropriate subject.
    if (Subject === "Please select one of the following:") {
        alert("Please choose a valid subject.");
        return false;
    }
    
    if (Specify == "") {
        alert("Please specify your issue.");
        return false;
    }

    //User recieves feedback when the form is correctly submitted.
    alert("Thank you for your submission. Our team will be in touch with you shortly.");
    return true; //returns true when the user has submitted the form.
}