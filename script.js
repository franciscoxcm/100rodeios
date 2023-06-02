gsap.registerPlugin(ScrollTrigger);

// NAVBAR
gsap.from('.nav-bar', { duration: 1, y: '-100%', ease: 'bounce'})
gsap.from('.icons', {duration: 1, opacity: 0, delay: 1})
gsap.from('.splash', {duration: 3, scale: 0, delay: 2})
gsap.from('.onda-azul-topo', {duration: 3, height: 0, delay: 1})

// CORPO
// gsap.to('.corpo', {
//     scrollTrigger: {
//         trigger: ".tarde",
//         start: "top bottom", //top-> posição do trigger alvo// bottom -> posição do ecra para dar match
//         markers: true,
//         scrub: true
//     },
//     duration: 0.5,
//     backgroundColor: "#D19B43",
// })
// gsap.to('.corpo', {
//         scrollTrigger: {
//         trigger: ".noite",
//         start: "center center",
//         markers: true,
//         scrub: true
//     },
//     duration: 0.5,
//     backgroundColor: "#1D2F57",
// })
// gsap.to('.corpo', {
//         scrollTrigger: {
//         trigger: ".manha",
//         start: "center center",
//         markers: true,
//         scrub: true
//     },
//     duration: 0.5,
//     backgroundColor: "#E8CC75",
// })