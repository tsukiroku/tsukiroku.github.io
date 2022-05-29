<script lang="ts">
    import theme from '../themeScheme';
    import { github } from '../main';
</script>

<p
    class="next"
    style="color: {theme.nextText}"
    on:click={() => (location.href = github)}
>
    Github ->
</p>

<style>
    p.next {
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 15px 35px;
        font-size: 20px;
        font-family: 'Fira Code', sans-serif;
        cursor: pointer;
    }
</style>
