<script lang="ts">
    import theme from '../themeScheme';
    import { github } from '../main';
</script>

<p
    class="github"
    style="color: {theme.nextText};"
    on:click={() => (location.href = github)}
>
    Github ->
</p>

<style>
    p.github {
        position: fixed;
        top: 0;
        right: 0;
        padding: 15px 35px;
        font-size: 20px;
        cursor: pointer;
        animation: shake_w 1s infinite both ease-in-out;
    }
</style>
