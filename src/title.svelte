<script>
    import t from "./themeScheme";
</script>

<div class="container">
    <p class="title" style="color: {t.default}">tsukiroku</p>
    <p class="description" style="color: {t.default}">student asdldsflksdflksdflk</p>
</div>

<style>
    div.container {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    div.container > .title {
        text-transform: uppercase;
        font-size: 70px;
        font-weight: 100;
        animation-name: bounce;
        animation-duration: 1s;
    }

    div.container > .description {  
        font-size: 25px;
    }

    @media (min-width: 640px) {
        div.container {
            max-width: none;
        }
    }

    @media (max-width: 640px) {
        div.container > .title {
            font-size: 40px;
        }

        div.container > .description {
            font-size: 25px;
        }
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            transform: translateY(0);
        }

        40% {
            transform: translateY(-30px);
        }

        60% {
            transform: translateY(-15px);
        }
    }
</style>
