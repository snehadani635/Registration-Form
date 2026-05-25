function registerUser(){
    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username==""|| password==""){
        alert("Please fill all fields");
        return;
    }
    localStorage.setItem(username, password);
    alert("Registration Successful");

}

function loginUser(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;

    let storedPassword = localStorage.getItem(username);

    if(storedPassword==null){
        document.getElementById("message").innerHTML="User not Found";
    }

    else if(storedPassword== password){
        document.getElementById("message").innerHTML="Login Successful";
    }

    else{
        document.getElementById("message").innerHTML="Wrong Password";
    }

 

}