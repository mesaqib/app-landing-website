function openNav() {
   document.querySelector("#myNav").style.width = "100%";
}

function closeNav() {
    document.querySelector("#myNav").style.width = "0";
}



gsap.from (".phone1", {
     y: 400,
     duration : 1
});




gsap.from (".right__column .right__img", {
    scale: 0,
    opacity: 0,
    delay: 1
},
{
 scale: 2,
 opacity: 1,
 duration: 2

});




gsap.from(".nav__menu", {
     y: -400,
     duration: 1,
     delay: 1
});


gsap.from(".left__column", {
     opacity: 0,
     x: -400,
     duration: 1,
     delay: 2
},
{
    opacity: 1  
});


gsap.from(".top__circle", {
  opacity: 0,
  x: -400,
  duration: 2,
  delay: 3

},
{
    opacity: 1 
});