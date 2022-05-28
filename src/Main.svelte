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
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        div.container {
            max-width: none;
        }
    }
</style>
