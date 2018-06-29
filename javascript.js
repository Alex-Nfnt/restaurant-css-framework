var photos1 = document.getElementById("photos01");
var photos2 = document.getElementById("photos02");
var photos3 = document.getElementById("photos03");
var pagin1 = document.getElementById('pag01');
var pagin2 = document.getElementById('pag02');
var pagin3 = document.getElementById('pag03');

pagin1.onclick = function() {
  photos1.style.display = "block";
  photos2.style.display = "none";
  photos3.style.display = "none";
}

pagin2.onclick = function() {
  photos1.style.display = "none";
  photos2.style.display = "block";
  photos3.style.display = "none";
}

pagin3.onclick = function() {
  photos1.style.display = "none";
  photos2.style.display = "none";
  photos3.style.display = "block";
}

function sendthis() {
  alert("Merci pour votre message :) !");
}