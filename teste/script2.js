
gsap.registerPlugin(MotionPathPlugin);

gsap.utils.random("");


// LINHAS
gsap.fromTo("#linha-fina", { 
    transformOrigin: "50% 1%" ,
    rotation:1000,
    opacity: 0,
    
}, {
    duration: 3, 
    transformOrigin: "50% 1%" ,
    rotation:0,
    opacity: 1,
    ease: "back.inOut(1.7)"
});
gsap.fromTo("#linha-grossa", {
    transformOrigin: "50% 1%" ,
    rotation:-1000,
    opacity: 0
}, {
    duration: 3, 
    transformOrigin: "50% 1%" ,
    rotation:0,
    opacity: 1,
    ease: "back.inOut(1.7)"
});


// NUMEROS
gsap.fromTo("#numero-segundo-zero-exterior, #numero-segundo-zero-interior, #numero-primeiro-zero-exterior, #numero-primeiro-zero-interior, #numero-um",{ //
    opacity:0,
    scale: 0
}, {

    opacity:1,
    duration: 1.5,
    scale: 1,
    delay: 2.5,
    ease: "bounce.out"
});

// NOME
gsap.fromTo("#letra-r, #letra-primeira-o, #letra-segunda-o, #letra-d, #letra-e, #letra-i, #letra-s",{ //
    
    scale: 0
}, {
    transformOrigin:"center",
    duration: 1.5,
    scale: 1,
    delay: 2.5,
    ease: "bounce.out"
});
