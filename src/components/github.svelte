<script lang="ts">
    import theme from '../themeScheme';
</script>

<p
    class="next"
    style="color: {theme.nextText}"
    on:click={() => (location.href = 'https://github.com/tsukiroku')}
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
