gsap.registerPlugin(ScrollTrigger);

// NAVBAR
gsap.from('.nav-bar', { duration: 1, y: '-100%', ease: 'bounce'})
gsap.from('.icons', {duration: 1, opacity: 0, delay: 1})
gsap.from('.splash', {duration: 3, scale: 0, delay: 2})
gsap.from('.onda-azul', {duration: 3, height: 0, delay: 2})

// CORPO
gsap.to('.corpo', {
    duration: 0.5,
    backgroundColor: "#D19B43",
    scrollTrigger: ".tarde"
})
gsap.to('.corpo', {
    duration: 0.5,
    backgroundColor: "#1D2F57",
    scrollTrigger: ".noite"
})
gsap.to('.corpo', {
    duration: 0.5,
    backgroundColor: "#E8CC75",
    scrollTrigger: ".manha"
})