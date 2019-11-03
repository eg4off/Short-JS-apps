var email = document.getElementById("email");
var password = document.getElementById('password');
var confirmPassword = document.getElementById('c-password');
var allErrors = document.querySelector('.error');
var emailError = document.getElementById('email_error');
var passError = document.getElementById('pass_error');
var cpassError = document.getElementById('cpass_error');


function checkEmail() {
    
    if (email.value.split('@').length - 1 === 0 || email.value.split('.').length - 1 === 0) {
        email.style.border = "1px solid red";
        email.style.marginBottom = "0px";
        emailError.innerHTML = "Email must contain characters '@' and '.'";
        emailError.style.color = "#eef02f";
        return false;
    } else{
        email.style.border = "1px solid #5e6e66";
        emailError.innerHTML = "";
        email.style.border = "1px solid #658ccc";
        email.style.color = '#aec9f4';
        email.style.marginBottom = "20px";
        return true;
    };
};

var checkPassword = function(){

    if (password.value.length < 9){
        password.style.border = "1px solid red";
        password.style.marginBottom = "0px";
        passError.innerHTML = "password can't be shorter 9 characters";
        passError.style.color = "#eef02f";
        return false;
    } else{
        password.style.border = "1px solid #5e6e66";
        passError.innerHTML = "";
        password.style.border = "1px solid #658ccc";
        password.style.color = '#aec9f4';
        password.style.marginBottom = "20px";
        return true;
        };
};

var checkPasswordMatch = function(){

    if (password.value !== confirmPassword.value){
        confirmPassword.style.border = "1px solid red";
        confirmPassword.style.marginBottom = "0px";
        cpassError.innerHTML = "password can't be shorter 9 characters";
        cpassError.style.color = "#eef02f";
        return false;
    } else{
        confirmPassword.style.border = "1px solid #5e6e66";
        cpassError.innerHTML = "";
        confirmPassword.style.border = "1px solid #658ccc";
        confirmPassword.style.color = '#aec9f4';
        confirmPassword.style.marginBottom = "0px";
        return true;
        };
};

function toSite() {

        if (emailError.innerText == "" && passError.innerText == "" && cpassError.innerText == "") {
             window.location.href="index.html";
        };
};