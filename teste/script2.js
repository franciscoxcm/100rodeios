
gsap.registerPlugin(MotionPathPlugin);

const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");
const tl = gsap.timeline({ paused: true, reversed: true });
tl.to("#menu-icon", {duration: 1, rotation: -1000, transformOrigin: 'bottom center', ease: "elastic.out(1, 0.3)"});
// tl.to("#linha2", "#linha3", {duration:1 scale:2,})


menu.addEventListener('click', function () {
    console.log("#menu-icon");
    if (tl.reversed()) {
        tl.play();
        
    } else {
        tl.reverse();        
    }
})


gsap.effects.explode("#menu2", {
    direction: "up", //can reference any properties that the author decides - in this case "direction".
    duration: 3
  });





































// //************************LOGO */
// // LINHAS
// gsap.fromTo("#linha-fina", { 
//     transformOrigin: "50% 1%" ,
//     rotation:1000,
//     opacity: 0,
    
// }, {
//     duration: 3, 
//     transformOrigin: "50% 1%" ,
//     rotation:0,
//     opacity: 1,
//     ease: "back.inOut(1.7)"
// });
// gsap.fromTo("#linha-grossa", {
//     transformOrigin: "50% 1%" ,
//     rotation:-1000,
//     opacity: 0
// }, {
//     duration: 3, 
//     transformOrigin: "50% 1%" ,
//     rotation:0,
//     opacity: 1,
//     ease: "back.inOut(1.7)"
// });


// // NUMEROS
// gsap.fromTo("#numero-segundo-zero-exterior, #numero-segundo-zero-interior, #numero-primeiro-zero-exterior, #numero-primeiro-zero-interior, #numero-um",{ //
//     opacity:0,

// }, {
//     opacity:1,
//     duration: 1.5,
//     delay: 2.5,
// });

// // NOME
// gsap.fromTo("#letra-r, #letra-primeira-o, #letra-segunda-o, #letra-d, #letra-e, #letra-i, #letra-s",{ //
//     opacity: 0,

// }, {
//     duration: 1.5,
//     opacity: 1,
//     delay: 2.5,
// });
