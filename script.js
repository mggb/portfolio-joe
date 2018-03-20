$(document).ready(function () {
  $('#wrapper').fullpage({anchor:['acceuil','about', 'project', 'contact']});
});
var soundparents=document.querySelector('.soundtrack');
var sound = document.querySelector('.soundtrack-bar');
var sound2 = document.querySelector('.soundtrack-bar2');
var sound3 = document.querySelector('.soundtrack-bar3');
var sound4 = document.querySelector('.soundtrack-bar4');
var sound5 = document.querySelector('.soundtrack-bar5');
var l =0;
var x = document.querySelector(".myAudio");

x.play()
var changeSonore = false
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
var onepage =document.querySelector('.title-center');
var secondPage =document.querySelector('.description-joe')
var threePage =document.querySelector('.project-joe')
var forPage =document.querySelector('.last-page')
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
var project =document.querySelector('.project')
var contact=document.querySelector('.Contact');
var copyright=document.querySelector('.Copyright')
var containerRobot =document.querySelector('.container-robot');
var backToTop=document.querySelector('.text-back')

window.addEventListener('wheel',function () {
  if (onepage.classList.contains("active")) {
    mousseActive.style.display="block";
  }
  else {
    mousseActive.style.display="none";
  }
});

window.addEventListener('wheel',function () {
  if (secondPage.classList.contains("active")){
    about.style.fontFamily='Gotham-bold'
    expresion.style.display="block";
  }
  else {
    about.style.fontFamily='';
    expresion.style.display="";
  }
});

window.addEventListener('wheel',function () {
  if (threePage.classList.contains("active")) {
    copyright.style.display='block';
    project.style.fontFamily='Gotham-bold'
  }
  else {
    copyright.style.display='';
    project.style.fontFamily=''
  }
});

window.addEventListener('wheel',function () {
  if (forPage.classList.contains("active")) {
    containerRobot.style.display='block';
    copyright.style.display='block';
    contact.style.fontFamily='Gotham-bold'
    console.log('lolscroll');
  }
  else {
    containerRobot.style.display='';
    copyright.style.display='';
    contact.style.fontFamily=''
  }
});
window.addEventListener('wheel',function () {
  console.log(window.scrollY);

});

function clear() {
  mousseActive.style.display="none";
  about.style.fontFamily='';
  expresion.style.display="";
  copyright.style.display='';
  project.style.fontFamily='';
  copyright.style.display='';
  contact.style.fontFamily='';
  containerRobot.style.display='';
}

backToTop.addEventListener('click',function () {
  setTimeout(function () {
    clear()
    mousseActive.style.display="block";
  }, 200);
});

about.addEventListener('click',function () {
  setTimeout(function () {
    clear()
    about.style.fontFamily='Gotham-bold'
    expresion.style.display="block";
  }, 200);
});

project.addEventListener('click',function () {
  setTimeout(function () {
    clear()
    copyright.style.display='block';
    project.style.fontFamily='Gotham-bold'
  }, 200);
})

contact.addEventListener('click',function () {
  setTimeout(function () {
    clear()
    containerRobot.style.display='block';
    copyright.style.display='block';
    contact.style.fontFamily='Gotham-bold'

  }, 200);
})
