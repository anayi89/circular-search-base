/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementsByClassName("fa-solid fa-bars")[0].style.display = "none";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementsByClassName("fa-solid fa-bars")[0].style.display = "inline-block";
}