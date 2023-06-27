gsap.registerPlugin(ScrollTrigger);


// // NAVBAR***********************************************************************


gsap.from('.nav-bar', { duration: 1, y: '-100%', ease: "circ.in" });//,delay: 4
gsap.from('.icons', { duration: 1, opacity: 0, delay: 1 });
gsap.from('.onda-azul-topo', { duration: 1, height: 0, delay: 1 });



//MENU LATERAL****************************************************************
const menu = document.getElementById("menu");
const tl = gsap.timeline({ paused: true, reversed: true });
tl.fromTo('.menu-lateral', { x: '-100%' }, { duration: 0.5, x: 0, ease: 'circ.out' });

const tl1 = gsap.timeline({ paused: true, reversed: true });
const tl2 = gsap.timeline({ paused: true, reversed: true });
const tl3 = gsap.timeline({ paused: true, reversed: true });
tl1.to("#linha1", {duration:1, y: -10, opacity: 0, ease: "back.inOut(4)"})
tl2.to("#linha2", {duration:1, y: 13, rotation: 50, transformOrigin: 'bottom center', ease: "back.inOut(4)"})
tl3.to("#linha3", {duration:1, x: 9,rotation: -50, transformOrigin: 'bottom center', ease: "back.inOut(4)"})

menu.addEventListener('click', function () {
   
    if (tl.reversed()) {
        tl1.play();
        tl2.play();
        tl3.play();
        const body = document.getElementById('body');
        const criarFundo = document.createElement("div");
        tl.play();
        body.appendChild(criarFundo);
        criarFundo.setAttribute('class', 'filtro-escuro uk-position-absolute');
        criarFundo.setAttribute('id', 'fundo-escuro');
        var altura = window.scrollY;
        document.getElementById('fundo-escuro').style.top = altura+"px";    
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
        tl1.reverse();   
        tl2.reverse();  
        tl3.reverse();   
        tl.reverse();
        document.getElementById("fundo-escuro").remove();
        //ativar scrll
        window.onscroll = function () { };
        
    }
})

