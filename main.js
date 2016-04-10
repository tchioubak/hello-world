/*
var monTitre = document.querySelector('h1');
monTitre.textContent = 'Hello world!';
*/
/*
document.querySelector('html').onclick=function() { alert('Aïe, arrêtez de cliquer !'); }
 ou
var maHTML = document.querySelector('html');
maHTML.onclick = function() {};
*/
var monImage = document.querySelector('img');

monImage.onclick = function() {
    var maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/hills.png') {
      monImage.setAttribute ('src','images/mountains.png');
    } else {
      monImage.setAttribute ('src','images/hills.png');
    }
}
var monBouton = document.querySelector('button');
var monTitre = document.querySelector('h1');
function définirAdj() {
  var monAdj = prompt("Veuillez saisir l'épithète.");
  localStorage.setItem('adj', monAdj);
  monTitre.textContent = 'Mozilla est ' + monAdj;
}
if(!localStorage.getItem('adj')) {
  définirAdj();
} else {
  var adjEnregistré = localStorage.getItem('adj');
  monTitre.textContent = 'Mozilla est cool, ' + adjEnregistré;
}
monBouton.onclick = function() {
  définirAdj();
}
/*
*/
