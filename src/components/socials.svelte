<script lang="ts">
    import Social from './components/social.svelte';
    import theme from '../themeScheme';
    import { github } from '../main';
</script>

<div class="socials">
    <p class="title" style="color: {theme.default}" id="socials">Socials</p>
    <Social name="Github" url={github} color={theme.socialGithub} />
    <Social
        name="Twitter"
        url={`https://twitter.com/tsukiroku_t`}
        color={theme.socialTwitter}
    />
    <Social
        name="Mail"
        url={`mailto:tsukiroku@yahoo.com`}
        color={theme.socialMail}
    />
</div>

<style>
    .socials {
        position: absolute;
        top: 200%;
        right: 0;
        padding: 100px 100px;
        text-align: right;
    }

    .socials > .title {
        font-size: 40px;
        font-weight: bold;
    }

    @media (max-width: 640px) {
        .socials {
            text-align: center;
            max-width: 240px;
            margin: auto;
            position: relative;
            top: 40%;
        }

        .socials > .title {
            font-size: 30px;
            font-family: 'Fira Code', sans-serif;
        }
    }
</style>
