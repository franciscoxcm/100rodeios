<?php
require_once("inicio.php");
require_once("abertura.php");
require_once("nav-bar.php");
?>

<div class="uk-section uk-padding-remove corpo">
    <div class="uk-position-relative">
        <div class="uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: 7:5; autoplay: true;  autoplay-interval: 10000; velocity: 0.1">

            <ul class="uk-slideshow-items">
                <li>
                    <div class="uk-position-cover uk-transform-origin-center-left">
                        <img class="" src="img/hp/Slider/base-escura-mobile.jpg" alt="" uk-cover loading="lazy">
                </li>
                <li>
                    <div class="uk-position-cover uk-transform-origin-center-left">
                        <img src="img/hp/Slider/base-clara-mobile.jpg" alt="" uk-cover loading="lazy">
                    </div>
                </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>
        <div class="uk-position-relative recuar" uk-sticky="offset: 70">
            <img class="onda-azul-topo uk-position-top" src="img/nav-bar/onda-topo-azul.png" alt="">
        </div>
    </div>
    <div class="uk-section uk-container uk-padding-remove-left uk-margin-large-top">
        <div class="uk-grid-collapse" data-uk-grid>
            <div id="teste" class="uk-width-1-6 uk-flex uk-flex-center uk-position-relative">
                <img id="nascer-sol" class="uk-position-absolute recuar sol-lua" uk-sticky="offset: 200" src="img/hp/nascer-sol.svg" alt="">
                <div id="apagar-sol" class="uk-position-absolute recuar sol-lua" uk-sticky="offset: 200"><img id="sol-cheio" src="img/hp/sol-cheio.svg" alt=""></div>
                <img id="lua" class="uk-position-absolute recuar sol-lua" uk-sticky="offset: 200" src="img/hp/lua.svg" alt="">
                <img class="uk-position-absolute linha-tempo " src="img/hp/linha-sol2.svg" alt="">
            </div>
            <div class="uk-width-expand uk-flex uk-flex-column uk-flex-center epocas-dia">
                <div class="manha uk-margin-large-top">
                    <h2>A nossa Manhã</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                    </div>
                </div>
                <div class="tarde uk-margin-large-top">
                    <h2>A nossa Tarde</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                    </div>
                </div>
                <div class="noite uk-margin-large-top">
                    <h2>A nossa Noite</h2>
                    <div class="uk-child-width-1-2 uk-grid-small" data-uk-grid>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                        <div>
                            <div class="border"><img src="img/hp/cards/Pastel de Nata.png" alt="" loading="lazy"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script src="estilos/hpscript.js" defer></script>
<?php require_once("footer.php") ?>