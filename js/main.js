  // nav
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
  // portfolio
  let portfolio = document.getElementById("row");
  let btn = document.getElementById("portOuvert");
  let cls = document.getElementById("portFermer");
  btn.onclick = function(show) {
    portfolio.style.display = "block";
  }
  cls.onclick = function(hidden) {
    portfolio.style.display = "none";
  }
  // copyright
let date = new Date();
let year = date.getFullYear();
document.getElementById("date").innerHTML = year;
