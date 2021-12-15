function function_menu() {
    var element = document.getElementById("menu");
    element.classList.toggle("open");
}

function function_status() {
    var element = document.getElementById("status_container");
    var element2 = document.getElementById("status_shutdown_button");
    element.classList.toggle("open");
    element2.classList.toggle("open");

    document.getElementById("tap_ui").style.transitionDuration = "1.5s";
}

function function_status_shutdown() {
    var element = document.getElementById("status_container");
    var element2 = document.getElementById("status_shutdown_button");
    element.classList.toggle("open");
    element2.classList.toggle("open");
      
    document.getElementById("tap_ui").style.transitionDuration = "0s";
}