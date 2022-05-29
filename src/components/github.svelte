<script lang="ts">
    import theme from '../themeScheme';
    import { github } from '../main';

    const over = () => {
        const element = document.getElementsByClassName(
            'github'
        )[0] as HTMLElement;
        element.style.animationName = 'none';
        requestAnimationFrame(() =>
            setTimeout(() => (element.style.animationName = ''), 0)
        );
    };
</script>

<p
    class="github"
    style="color: {theme.nextText};"
    on:click={() => (location.href = github)}
    on:focus={over}
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

    @keyframes shake_w {
        0% {
            transform: translateX(0);
        }
        6.5% {
            transform: translateX(-2px) rotate(2deg);
        }
        18.5% {
            transform: translateX(2px) rotate(2deg);
        }
        31.5% {
            transform: translateX(-1px) rotate(-1deg);
        }
        43.5% {
            transform: translateX(1px) rotate(1deg);
        }
        50% {
            transform: translateX(0);
        }
        100% {
            transform: none;
        }
    }
</style>
