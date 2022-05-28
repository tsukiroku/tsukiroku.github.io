<script lang="ts">
    import { name } from './stores';
    export let smRlavy = false;
</script>

<div class="container">
    <h1>Hello {$name}{smRlavy ? '!' : '?'}</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
</div>

<style>
    div.container {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    div.container > h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 80px;
        font-weight: 100;
        animation-name: bounce;
        animation-duration: 1s;
    }

    div.container > p {
        font-size: 25px;
    }

    @media (min-width: 640px) {
        div.container {
            max-width: none;
        }
    }

    @media (max-width: 640px) {
        div.container > h1 {
            font-size: 10vh;
        }

        div.container > p {
            font-size: 5vh;
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
