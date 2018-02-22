
var soundparents=document.querySelector('.soundtrack');
var sound = document.querySelector('.soundtrack-bar');
var sound2 = document.querySelector('.soundtrack-bar2');
var sound3 = document.querySelector('.soundtrack-bar3');
var sound4 = document.querySelector('.soundtrack-bar4');
var sound5 = document.querySelector('.soundtrack-bar5');
var l =0;


soundparents.addEventListener('click',function () {

    sound.classList.toggle("anim");
    sound2.classList.toggle("anim4");
    sound3.classList.toggle("anim5");
    sound4.classList.toggle("anim2");
    sound5.classList.toggle("anim3");

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







//
// var lost =document.querySelectorAll('.list-expresion');
// var compter2=0;
//
// function visibleExpresion() {
//   lost[compter2].classList.remove('visible');
//   compter2 ++;
//     if (compter2===5) {
//       compter2=0
//     }
//   lost[compter2].classList.add('visible');
// }





var actuel;

/** This is high-level function.
 * It must react to delta being more/less than zero.
 */
function handle(delta) {
        if (delta < 0){
          actuel=window.scrollY;
          var top =0;
          if( actuel >= 800 ) top = 400;
          else if( actuel < 800 && actuel >= 400 ) top =0;

}};
var mousseActive = document.querySelector('.mousey');
var expresion =document.querySelector('.down-page-2');
window.addEventListener('scroll',function () {
  if (window.scrollY>960) {
    mousseActive.style.display="none";
    expresion.style.display="block";

    console.log('bonjour');
  }
  else {
    mousseActive.style.display="block"
    expresion.style.display="none";

  }
})




















	// window.scroll({
  //
  //   top: top,
  //   left: 0,
  //   behavior: 'smooth',
  // });
//   var descendre =3 ;
//      var inducteur;
//      var compteurdescend = 2
//      var o = compteurdescend*1898/3
//      window.scrollY= o;
//      console.log('haut',window.scrollY,o,inducteur);
//      scrollTo(0,o);
//      compteurdescend--
//
//      window.pageYoffset = inducteur;
//      console.log(inducteur);
//      o--
//   }
//         else{
//         console.log('bas');
//         var compteurdescend = 0
//         var o = compteurdescend*1898/3
//         window.scrollY= o;
//         console.log('haut',window.scrollY,o,inducteur);
//         scrollTo(500,o);
//         compteurdescend++
//       }
// }
//
// function wheel(event){
//         var delta = 0;
//         if (!event)
//                 event = window.event;
//         if (event.wheelDelta) {
//                 delta = event.wheelDelta/120;
//         } else if (event.detail) {
//                 delta = -event.detail/3;
//         }
//         //console.log( delta )
//         if (delta)
//                 handle(delta);
//
//         if (event.preventDefault)
//                 event.preventDefault();
// 	event.returnValue = false;
// }
//
// if (window.addEventListener)
//         window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;
//
//
//







// document.addEventListener('scroll', function(e) {
//     var currScroll = document.body.scrollTop;
//     document.body.scrollTop = calc(~"currScroll + 100vh");
//  }
//
// );

// setInterval(lol2, 15000);
//
//
// /* scrolllll*/
//
// var x = 0;
// var y = 1000;
// var o=0;
//
// function etat() {
//   o=0;
//   console.log("la valeur dans le settime es ")
// }
// setInterval(etat, 5000);
//
//
//
//
// //var test = function() {
//
// window.addEventListener('scroll',function() {
//   if (o===0) {
//     if (this.oldScroll < this.scrollY) {
//       console.log('bonjour');
//       while (x && y !== x-1000 && y-1000) {
//         window.scrollTo(x-100, y-1000);
//       }
//        x=x-1000;
//        y=y-1000;
//        console.log("la valeur de o est de : ", o)
//       o=1
//       console.log("et maintenant : ", o)
//
//     //  return o
//     }
//     if (this.oldScroll > this.scrollY) {
//       console.log('aurevoir');
//       while (x && y !== x+1000 && y+1000) {
//         window.scrollTo(x+100, y+100);
//       }
//        x=x+1000;
//        y=y+1000;
//        o=1;
//       //return o
//     }
//      this.oldScroll = this.scrollY;
//   }
//
// });
