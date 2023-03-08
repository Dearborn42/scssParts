function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
     document.querySelector(".dropbtn").addEventListener("click", function () {
        document.querySelector(".dropdown-content").classList.toggle("show");
    });
  }
}