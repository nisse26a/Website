function menuFunction() {
  var element = document.getElementById("menu");
  element.classList.toggle("open");
}

function runFunction() {
  var element = document.getElementById("tap_image_container");
  element.classList.toggle("open");

  document.getElementById("tap_ul").style.transitionDuration = "1.5s"
}

function stopFunction() {
  var element = document.getElementById("tap_image_container");
  element.classList.toggle("open");

  document.getElementById("tap_ul").style.transitionDuration = "0s"
}