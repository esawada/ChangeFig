// Get the modal
var modais = document.getElementById("meuModal");

// Get the button that opens the modal
var btn = document.getElementById("meuBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modais.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modais.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modais) {
    modais.style.display = "none";
  }
}