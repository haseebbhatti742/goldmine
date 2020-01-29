function check(){
    var pass1 = document.getElementById("new-password");
    var pass2 = document.getElementById("confirm-new-password");
    if(pass1.value == pass2.value){
        document.getElementById("error-msg").innerHTML = "";
    }
    else{
        document.getElementById("error-msg").innerHTML = "Password doesn't match";
    }
}

function check2(){
    var pass1 = document.getElementById("pass");
    var pass2 = document.getElementById("repeatpass");
    if(pass1.value == pass2.value){
        document.getElementById("error-msg").innerHTML = "";
    }
    else{
        document.getElementById("error-msg").innerHTML = "Password doesn't match";
    }
}