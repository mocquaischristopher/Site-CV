  // nav
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// copyright
let year = new Date().getFullYear();
document.getElementById("date").innerHTML = year;
  // portfolio
let portfolio = document.getElementById("row");
let btn = document.getElementById("portOuvert");
let cls = document.getElementById("portFermer");
// btn.onclick = function(show) {
//   portfolio.style.display = "block";
// }
// cls.onclick = function(hidden) {
//   portfolio.style.display = "none";
// }
