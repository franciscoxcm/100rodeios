//***************************LOGOOOOOOOOO************************ */
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


// NUMEROS e NOME
gsap.fromTo("#letra-r, #letra-primeira-o, #letra-segunda-o, #letra-d, #letra-e, #letra-i, #letra-s, #numero-segundo-zero-exterior, #numero-segundo-zero-interior, #numero-primeiro-zero-exterior, #numero-primeiro-zero-interior, #numero-um",{ //
    opacity:0,

}, {
    opacity:1,
    duration: 1.5,
    delay: 2.5,
});

// DIV DE ABERTURA MOVER PARA A ESQUERDA
gsap.to("#div-abertura", {x: "-100vh", duration:1, delay:3, ease: "elastic.in(1, 1)"})

gsap.fromTo("#show-after", {
    opacity: 0,
}, {
    delay: 4,
    duration: 1,
    opacity:1,
    
})
// NAVBAR***********************************************************************


gsap.from('.nav-bar', { duration: 1, y: '-100%', ease: "circ.in",delay: 4 });//
gsap.from('.icons', { duration: 1, opacity: 0, delay: 5 });
gsap.from('.onda-azul-topo', { duration: 1, height: 0, delay: 5 });







//MUDAR O ICON DO SOL/LUA
//FAZ DESAPARECER O NASCER DO SOL QUANDO CHEGA A TARDE
gsap.to('#nascer-sol', {
    scrollTrigger: {
        trigger: ".tarde",
        start: "top bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
        end: "center center",
        // markers: true,
        scrub: true
    },
    duration: .5,
    opacity: 0,
})
 //FAZ APARECER O SOL CHEIO QUANDO CHEGA A TARDE
gsap.fromTo('#sol-cheio', {
    opacity: 0,
}, {
scrollTrigger: {
    trigger: ".tarde",
    start: "top bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
    end: "center center",
    // markers: true,
    scrub: true
    },
    duration: 5,
    opacity: 1,
})
gsap.to("#apagar-sol", {
    scrollTrigger: {
        trigger: ".noite",
        start: "center bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
        end: "center center",
        // markers: true,
        scrub: true
        },
        duration: 2,
        opacity: 0,
})
//FAZ APARECER A LUA QUANDO CHEGA A NOITE
gsap.fromTo('#lua', {
    opacity: 0,
}, {
scrollTrigger: {
    trigger: ".noite",
    start: "center bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
    end: "bottom top",
    // markers: true,
    scrub: true
    },
    duration: .5,
    opacity: 1,
})




// MUDAR A COR DO CORPO
gsap.to('.corpo', {
    scrollTrigger: {
    trigger: ".manha",
    start: "top center",
    end: "top center",
    // markers: true,
    scrub: true
    },
    duration: 0.5,
    backgroundColor: "#E8CC75",
})
gsap.to('.corpo', {
    scrollTrigger: {
        trigger: ".tarde",
        start: "top bottom", //center-> posição do alvo// bottom -> posição do ecra para dar match
        end: "bottom center",
        // markers: true,
        scrub: true
    },
    // duration: 3,
    backgroundColor: "#D19B43",
})
gsap.fromTo('.corpo', {                
        backgroundColor: "#D19B43",
}, {
    scrollTrigger: {
        trigger: ".noite",
        start: "center bottom",
        end: "bottom center",
        // markers: true,
        scrub: true
    },
    // duration: 5,
    backgroundColor: "#1D2F57",
})





// MUDAR SHADOW DOS CARDS
gsap.from('.border', {
    
    scrollTrigger: {
    trigger: ".manha",
    start: "top bottom",
    end: "top top",
    // markers: true,
    scrub: true
    },
    duration: 5,
    boxShadow: "#1D2F57 0px 0px 0px 0px",
    ease: "Power4. easeOut",
})
gsap.fromTo('.border', {
    boxShadow: "#1D2F57 -4px -4px 6px 3px",
 }, {
    scrollTrigger: {
        trigger: ".tarde",
        start: "center bottom", //center-> posição do alvo// bottom -> posição do ecra para dar match
        end: "bottom center",
        // markers: true,
        scrub: true
    },
    duration: 3,
    boxShadow: "#E8CC75 5px -5px 10px 2px",
})
gsap.fromTo('.border', {                
    boxShadow: "#E8CC75 5px -5px 10px 2px",
}, {
    scrollTrigger: {
        trigger: ".noite",
        start: "center bottom",
        end: "bottom center",
        // markers: true,
        scrub: true
    },
    duration: 0.5,
    boxShadow: "#fff 4px 2px 10px 1px",
})