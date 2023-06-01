<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/css/uikit.min.css" />

    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.19/dist/js/uikit-icons.min.js"></script>
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js"></script>

    <script src="script.js" defer></script>

    <link rel="stylesheet" href="style.css">
    <title>100Rodeios</title>
</head>

<body>
    <header>
        <?php require_once("nav-bar.php") ?>
    </header>
    <div class="body">
        <?php require_once("home.php") ?>
    </div>
    <footer>
        <?php require_once("rodape.php") ?>
    </footer>
</body>

</html>