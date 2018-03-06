
var soundparents=document.querySelector('.soundtrack');
var sound = document.querySelector('.soundtrack-bar');
var sound2 = document.querySelector('.soundtrack-bar2');
var sound3 = document.querySelector('.soundtrack-bar3');
var sound4 = document.querySelector('.soundtrack-bar4');
var sound5 = document.querySelector('.soundtrack-bar5');
var l =0;
var x = document.querySelector(".myAudio");


var changeSonore = true
soundparents.addEventListener('click',function () {
  if (changeSonore===true) {
    sound.classList.toggle("anim");
    sound2.classList.toggle("anim4");
    sound3.classList.toggle("anim5");
    sound4.classList.toggle("anim2");
    sound5.classList.toggle("anim3");
    changeSonore=false;
    x.play();
  }
  else {
    sound.classList.toggle("anim");
    sound2.classList.toggle("anim4");
    sound3.classList.toggle("anim5");
    sound4.classList.toggle("anim2");
    sound5.classList.toggle("anim3");
    changeSonore=true;
      x.pause();
  }
});

/* Pour animation*/
var lis =document.querySelectorAll('.list-location');
var compter = 0;
setInterval(lol, 3000);
function lol() {
  lis[compter].classList.remove('visible');
  compter ++;
    if (compter===8) {
      compter=0
    }
  lis[compter].classList.add('visible');
}
var actuel;
var mousseActive = document.querySelector('.mousey');
var expresion =document.querySelector('.down-page-2');
var secondPage =document.querySelector('.description-joe')
var threePage =document.querySelector('.project-joe')
var forPage =document.querySelector('.last-page')

window.addEventListener('wheel',function () {
  if (secondPage.classList.contains("active") ) {
    mousseActive.style.display="none";
    expresion.style.display="block";
  }
  else {
    mousseActive.style.display="block"
    expresion.style.display="none";

  }
})
var fullexpresion =document.querySelectorAll('.list-expresion');
var delay =0;
setInterval(next, 12000);
function next() {
  fullexpresion[delay].classList.remove('visible');
  delay ++;
    if (delay===5) {
      delay=0
    }
  fullexpresion[delay].classList.add('visible');
}
var about =document.querySelector('.about')
window.addEventListener('wheel',function () {
  if (secondPage.classList.contains("active")){
    about.style.fontFamily='Gotham-bold'
  }
  else {
    about.style.fontFamily=''
  }
});
var project =document.querySelector('.project')
window.addEventListener('wheel',function () {
  if (threePage.classList.contains("active")){
    project.style.fontFamily='Gotham-bold'
  }
  else {
    project.style.fontFamily=''
  }
});
var contact=document.querySelector('.Contact');
window.addEventListener('wheel',function () {
  if (forPage.classList.contains("active")){
    contact.style.fontFamily='Gotham-bold'
  }
  else {
    contact.style.fontFamily=''
  }
});
var copyright=document.querySelector('.Copyright')
window.addEventListener('wheel',function () {
  if (threePage.classList.contains("active")) {
    mousseActive.style.display="none";
    copyright.style.display='block';
  }
  else {
    mousseActive.style.display="none";
    copyright.style.display='';
  }
});

var containerRobot =document.querySelector('.container-robot');
window.addEventListener('wheel',function () {
  if (forPage.classList.contains("active")) {
    containerRobot.style.display='block';
    mousseActive.style.display="none";
    copyright.style.display='block';
  }
  else {
    containerRobot.style.display='';
    mousseActive.style.display="none";
    copyright.style.display='';
  }
});
