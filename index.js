function clicked() {
  var button = document.getElementById("join");
  button.classList.add("animate__animated");
  button.classList.add("animate__rotateOut");

  setTimeout(function () {
    window.location.assign("join.html");
  }, 500);
}
