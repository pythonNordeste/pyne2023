var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list");

tglbtn.addEventListener("click", () => {
  navlst.classList.toggle("active");
});
