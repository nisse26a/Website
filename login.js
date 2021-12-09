object.onclick = function() { myFunction };  

function myFunction() {
    var x = document.getElementById('ul');
         if (x.style.visibility === 'visible') {
            x.style.visibility = 'hidden';
        } else {
    x.style.visibility = 'visible';
  }
    var element = document.getElementById("nav-icon");
    element.classList.toggle("open");
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "Efraim" && password == "admin") {
        location.href = 'index.html';
    }
    else {
        alert("Inval username or password")
    }

}

 
