
// document.getElementById("btn").addEventListener("click",validate)

function validate() {
    let returnval = true;
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm_password');
    let passa = document.getElementById("password").value;
    let passc = document.getElementById("confirm_password").value;
    let emaila = document.getElementById("email").value;
    let mobilea = document.getElementById("mobile").value;
    

    // document.getElementsByClassName("formerror")[0].style.visibility = "hidden";

    const collection = document.getElementsByClassName("formerror");
    for (let i = 0; i < collection.length; i++) {
        collection[i].innerHTML = "";
    }

    
    //name validation
    if (firstName.value == "") {
        document.getElementById("tagfname").innerText = "blank space";
        returnval = false;
    }
    if (lastName.value == "") {
        document.getElementById("taglname").innerHTML = "blank space";
        returnval = false;
    }
    
    // email validation
    if (email.value == "") {
        document.getElementById("tagemail").innerHTML = "blank space";
        returnval = false;
    }
    if(emaila.indexOf('@')<=0){
        document.getElementById("tagemail").innerHTML = "invalid @ position";
        returnval = false;
    }
    if(emaila.charAt(emaila.length-4)!="." && emaila.charAt(emaila.length-3)!="."){
        document.getElementById("tagemail").innerHTML = "invalid domain name";
        returnval = false;
    }
    
    // mobile validation
    if (mobile.value == "") {
        document.getElementById("tagmobile").innerHTML = "blank space";
        returnval = false;
    }
    if(isNaN(mobilea)){
        document.getElementById("tagmobile").innerHTML = "only digit are allowed";
        returnval = false;
    }
    if(mobilea.length>10 || mobilea.length<10){
        document.getElementById("tagmobile").innerHTML = "number should be 10 digits";
        returnval = false;
    }

    // password validation
    if (confirmPassword.value == "") {
        document.getElementById("tagconfirmpassword").innerHTML = "blank space";
        returnval = false;
    }

    if(password.value == "") {
        document.getElementById("tagpassword").innerHTML = "blank space";
        returnval = false;
    }
    if(passa != passc){
        document.getElementById("tagconfirmpassword").innerHTML = "password not matched";
        returnval = false;
    }
    if(returnval!=false){
        window.location.href="rentmanagement.html"
    }
// return returnval;
}
