<?php require_once("inicio.php") ?>

<div class="fundo-claro">
    <?php require_once("nav-bar.php") ?>
    <div class="uk-margin-large-bottom">
        <div class="uk-position-relative recuar" uk-sticky="offset: 70">
            <img class="onda-azul-topo uk-position-top" src="img/nav-bar/onda-topo-azul.png" alt="">
        </div>
    </div>
    <video class="video" autoplay>
        <source src="img/historia/historia.mp4" type="video/mp4">
    </video>
    <div class="uk-padding-large uk-text-center">
        <h3><b>A Nossa História</b></h3>
    </div>
    <div>
        <div class="uk-padding-large">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam delectus quos assumenda unde qui, omnis sed itaque sit dolorum fuga, repellat, tempora illum porro a doloribus? Delectus adipisci rerum pariatur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo a magni, sed odio alias tempore quibusdam non eligendi ab soluta laboriosam voluptate inventore doloribus autem assumenda, sunt deleniti delectus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ducimus hic veniam explicabo facere, error, saepe perferendis illo laborum minima excepturi, iste adipisci quibusdam cupiditate. Explicabo numquam ab hic error.</p>
        </div>
    </div>
</div>
<div class="uk-position-relative">
    <!-- <img class="uk-position-bottom onda-azul-historia" src="img/historia/onda-azul-bottom-historia.svg" alt=""> -->
    <img class="uk-position-bottom linhas" src="img/historia/linhas.png" alt="">
</div>

<?php require_once("rodape.php") ?>

<script>
    //Nav bar invisivel após load
    const teste = document.getElementById("topo");

    function tirar() {
        teste.remove();
    };
    window.onload = tirar;


    const topo = gsap.timeline({
        paused: true,
        reversed: true
    });

    window.onscroll = function() {
            if (scrollY == 0) {
                teste.remove();
                console.log("Estás no topo");
            } else {
</script><?php require_once("nav-bar.php") ?><script>
    console.log("Não estás");
    }
    }
</script>