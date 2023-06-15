gsap.registerPlugin(ScrollTrigger);


// NAVBAR***********************************************************************
gsap.from('.nav-bar', { duration: 1, y: '-100%', ease: "circ.in" });
gsap.from('.icons', { duration: 1, opacity: 0, delay: 1 });
gsap.from('.onda-azul-topo', { duration: 1, height: 0, delay: 1 });



//MENU LATERAL****************************************************************
const menu = document.getElementById("menu");
const tl = gsap.timeline({ paused: true, reversed: true });
tl.fromTo('.menu-lateral', { x: '-100%' }, { duration: 0.5, x: 0, ease: 'circ.out' });

// function fundo() {
//     const body = document.getElementById('body')
//     const criarFundo = document.createElement("div.filtro-escuro");
//     body.appendChild(criarFundo);
//     criarFundo.setAttribute('id', 'fundo-escuro');
//     criarFundo.setAttribute('uk-sticky', '');
//     const fundo = gsap.timeline({ paused: true, reversed: true });
//     fundo.fromTo('.filtro-escuro', { opacity: 0 }, { duration: 0.5, opacity: 1 });
// }


menu.addEventListener('click', function () {
    const fundo = gsap.timeline({ paused: true, reversed: true });
    fundo.fromTo('.filtro-escuro', { opacity: 0 }, { duration: 0.5, opacity: 1 });

    if (tl.reversed()) {
        tl.play();
        var altura = window.scrollY;
        const body = document.getElementById('body');
        const criarFundo = document.createElement("div");
        body.appendChild(criarFundo);
        criarFundo.setAttribute('class', 'filtro-escuro uk-position-absolute');
        criarFundo.setAttribute('id', 'fundo-escuro');
        document.getElementById('fundo-escuro').style.top = altura+"px";    
        fundo.play();
        // canselar scroll
        scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
    } else {
        tl.reverse();
        fundo.reverse();
        document.getElementById("fundo-escuro").remove();
        //ativar scrll
        window.onscroll = function () { };
        
    }
})

    var tl2 = gsap.timeline({defaults:{duration: .8, ease: Back.easeOut.config(2), opacity: 0}})

    tl2.from(".teste", {delay: 5, scale: .2, transformOrigin: 'center'}, "=.2")

// onscroll = (event) => {
//     console.log("teste");
// };

































// CORPO
gsap.to('.corpo', {
    scrollTrigger: {
        trigger: ".tarde",
        start: "top bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
        end: "bottom center",
        markers: true,
        scrub: true
    },
    duration: 0.5,
    backgroundColor: "#D19B43",
})
gsap.to('.corpo', {
        scrollTrigger: {
        trigger: ".noite",
        start: "top bottom",
        end: "bottom center",
        // markers: true,
        scrub: true
    },
    duration: 0.5,
    backgroundColor: "#1D2F57",
})
gsap.to('.corpo', {
        scrollTrigger: {
        trigger: ".manha",
        start: "top bottom",
        end: "top center",
        // markers: true,
        scrub: true
    },
    duration: 0.5,
    backgroundColor: "#E8CC75",
})