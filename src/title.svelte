<script lang="ts">
    import theme from './themeScheme';
    export const id = '#title';
</script>

<div class="container" {id}>
    <p class="title" style="color: {theme.default}">tsukiroku</p>
    <p class="description">Student developers in South Korea.</p>
</div>

<style>
    div.container {
        text-align: center;
        max-width: 240px;
        margin: auto;
        position: relative;
        top: 20%;
    }

    div.container > .title {
        text-transform: uppercase;
        font-size: 70px;
        font-weight: 100;
        animation: bounce 1s 0.2s;
    }

    div.container > .description {
        font-size: 25px;
        background-image: linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 0%,
            rgba(155, 0, 247, 1) 100%,
            rgba(70, 0, 255, 1) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: transparent;
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
            font-size: 20px;
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
