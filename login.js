

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Efraim" && password == "admin") {
        location.href = 'index.html';
    }
    else {
        alert("Invalid username or password")
    }
}


