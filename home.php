<?php require_once("inicio.php") ?>
<?php require_once("nav-bar.php") ?>

<div class="uk-section uk-padding-remove">

    <div class="uk-position-relative">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:5; animation: pull; autoplay: true;  autoplay-interval: 2000; velocity: 0.1">

            <ul class="uk-slideshow-items">
                <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img class="" src="img/hp/Slider/base-escura.png" alt="" uk-cover>
                    </li>
                <li>
                    <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                        <img src="img/hp/Slider/base-clara.png" alt="" uk-cover>
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>
        <div class="uk-position-relative" uk-sticky="offset: 100">
            <img class="onda-azul-topo uk-position-top" src="img/nav-bar/onda-topo-azul.png" alt="">
        </div>
    </div>

    <div class="uk-width-auto@m" uk-sticky="offset: 200">
        <img src="img/hp/linha-sol.svg" alt="">
    </div>
    <div class="uk-width-expand@m epocas-dia">
        <div class="manha">
            <h2>A nossa Manhâ</h2>
            <img class="" src="img/hp/Slider/base-escura.png" alt="">
        </div>
        <div class="tarde">
            <h2>A nossa Tarde</h2>
        </div>
        <div class="noite">
            <h2>A nossa Noite</h2>
        </div>
    </div>
</div>

<?php require_once("rodape.php") ?>