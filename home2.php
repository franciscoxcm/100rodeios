<?php require_once("inicio.php") ?>
<?php require_once("nav-bar.php") ?>


<div class="uk-section uk-padding-remove corpo">
<div class="uk-position-relative">
        <div class="uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:5; animation: pull; autoplay: true;  autoplay-interval: 2000; velocity: 0.1">

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
        <div class="uk-position-relative" uk-sticky="offset: 70">
            <img class="onda-azul-topo uk-position-top" src="img/nav-bar/onda-topo-azul.png" alt="">
        </div>
    </div>
    <div class="uk-section uk-container uk-padding-remove-left uk-padding-remove-top">
        <div class="uk-grid-collapse" data-uk-grid>
            <div class="uk-width-1-6 uk-flex uk-flex-center">
                <img class="linha-tempo" src="img/hp/linha-sol2.svg" alt="" > <!--uk-sticky="offset: 150"-->
            </div>
            <div class="uk-width-expand uk-flex uk-flex-column uk-flex-center epocas-dia">
                <div class="manha uk-margin-large-top">
                    <h2>A nossa Manhã</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div class="teste"><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.png" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                    </div>
                </div>
                <div class="tarde uk-margin-large-top">
                    <h2>A nossa Tarde</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                    </div>
                </div>
                <div class="noite uk-margin-large-top">
                    <h2>A nossa Noite</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                        <div><img src="img/hp/cards/Pastel de Nata.svg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<?php require_once("rodape.php") ?>