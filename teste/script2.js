
gsap.registerPlugin(MotionPathPlugin);

// const menu = document.getElementById("menu");
// const menu2 = document.getElementById("menu2");
// const tl1 = gsap.timeline({ paused: true, reversed: true });
// const tl2 = gsap.timeline({ paused: true, reversed: true });
// const tl3 = gsap.timeline({ paused: true, reversed: true });
// tl1.to("#linha1", {duration:1.5, y: -50, opacity: 0, ease: "elastic.out(1, 0.3)"})
// tl2.to("#linha2", {duration:1.5, y: 13, rotation: 50, transformOrigin: 'bottom center', ease: "back.inOut(4)"})
// tl3.to("#linha3", {duration:1.5, x: 9,rotation: -50, transformOrigin: 'bottom center', ease: "back.inOut(4)"})

// menu2.addEventListener('click', function () {
//     if (tl1.reversed()) {
//         tl1.play();
//         tl2.play();
//         tl3.play();
        
//     } else {
//         tl1.reverse();   
//         tl2.reverse();  
//         tl3.reverse();    
//     }
// });



// menu.addEventListener("click", function () {
    
//     var contar = 0;
//     contar ++;
//     console.log("contar");
//     if (contar == 1) {
//         const pesquisa = document.getElementById("pesquisa");
//     const criardiv = document.createElement("div");
//     const formulario = document.createElement("form");
//     const input = document.createElement("input");


//     pesquisa.appendChild(criardiv);
//     criardiv.setAttribute("class", "uk-margin");
//     criardiv.setAttribute("id", "pesquisa-pai");
//     const pesquisaPai = document.getElementById("pesquisa-pai");
//     pesquisaPai.appendChild(formulario);
//     criardiv.setAttribute("class", "uk-search");
//     criardiv.setAttribute("class", "uk-search-default");
//     criardiv.setAttribute("id", "formulario");
//     const formularioPai = document.getElementById("formulario");
//     formularioPai.appendChild(input);
//     input.setAttribute("class", "uk-search-input");
//     input.setAttribute("type", "search");
//     input.setAttribute("placeholder", "Search");
//     input.setAttribute("aria-label", "Search");
    
//     } else {

//     };
    

// })


































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
