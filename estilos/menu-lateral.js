// const pesquisa = document.getElementById("pesquisa");
// const criardiv = createElement("div");
// const formulario = createElement("form");
// const input = createElement("input");

// pesquisa.addEventListener('click', function name() {
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
// })


const comecar = document.getElementById("pesquisa")
comecar.addEventListener("click", function () {
    const pesquisa = document.getElementById("teste");
    const criardiv = document.createElement("div");
    const formulario = document.createElement("form");
    const input = document.createElement("input");


    pesquisa.appendChild(criardiv);
    criardiv.setAttribute("class", "uk-margin");
    criardiv.setAttribute("id", "pesquisa-pai");
    const pesquisaPai = document.getElementById("pesquisa-pai");
    pesquisaPai.appendChild(formulario);
    criardiv.setAttribute("class", "uk-search");
    criardiv.setAttribute("class", "uk-search-default");
    criardiv.setAttribute("id", "formulario");
    const formularioPai = document.getElementById("formulario");
    formularioPai.appendChild(input);
    input.setAttribute("class", "uk-search-input");
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Search");
    input.setAttribute("aria-label", "Search");

})